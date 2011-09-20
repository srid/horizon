(ns stackato-doctor.sink
  (use [clojure.contrib.shell-out :only (sh)]
       [clojure.contrib.string :only (split-lines)]
       [lamina.core :as lm]))

(defn- run
  "Run cmd and return stdout only"
  [cmd]
  ((sh cmd :return-map true) :out))

(defn- sh-line-seq
  [cmd]
  (->> (.exec (Runtime/getRuntime) cmd)
       .getInputStream
       clojure.java.io/reader
       line-seq))

(defn- dea-tail-f
  "Returns the dea log lines (lazy seq) from this host"
  [host]
  (sh-line-seq (str "scripts/tail-dea-log " host)))

;; log queue
(def ^{:private true} log-queue (lm/channel))
(defn- register-log-source [host lazy-lines]
  (future
    (doseq [line lazy-lines]
      (lm/enqueue log-queue [host line]))))

;; mapping from hostname to open line-seq on dea.log (via ssh/tail-f)
(def ^{:private true} running-deas (agent {}))
(defn- update-running-deas
  "Update the running-deas agent with new set of deas from AWS"
  [curr]
  ;; TODO - remove shutdown DEAs as well.
  (let [hosts (split-lines (run "scripts/print-running-deas"))]
    (loop [newhosts (remove curr hosts)
           nxt      curr]
      (if (empty? newhosts)
        nxt
        (let [host       (first newhosts)
              tailer     (register-log-source host (dea-tail-f host))]
          (println "Added new DEA: " host)
          (recur (next newhosts)
                 (assoc nxt host tailer)))))))

(defn- remove-running-dea
  [host]
  (future-cancel (@running-deas host))
  (println "Removed DEA: " host " " (future-cancelled? (@running-deas host)))
  (send running-deas dissoc host))

(defn initialize
  "Initialize log processing from EC2"
  []
  (println "Initializing log processing")
  (send running-deas update-running-deas))

;; FIXME - this doesn't really cancel the futures
(defn shutdown
  "Shutdown log processing"
  []
  (println "Shutting down log processing")
  (doseq [host (keys @running-deas)]
    (remove-running-dea host)))

(defn next-log-record
  "Return the next available [host, log record]. Block until one is available."
  []
  (lm/wait-for-message log-queue))

(defn -main []
  (initialize)
  (loop []
    (let [[src log] (next-log-record)]
      (println (format "%.15s:    %s" src log)))
    ; (println (format "%d log entries; from %d dea's" (count log-queue) (count @running-deas)))
    ;; TODO - (send running-deas update-running-deas)
    (recur)))
