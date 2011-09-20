(ns stackato-doctor.ec2
  (use [clojure.contrib.shell-out :only (sh)]
       [clojure.contrib.string :only (split-lines)]
       [lamina.core :as lm]))

(defn run
  "Return stdout only"
  [cmd]
  ((sh cmd :return-map true) :out))

(defn- sh-line-seq
  [cmd]
  (->> (.exec (Runtime/getRuntime) cmd)
       .getInputStream
       clojure.java.io/reader
       line-seq))

(defn dea-tail-f
  "Returns the dea log lines (lazy seq) from this host"
  [host]
  (sh-line-seq (str "scripts/tail-dea-log " host)))

;; log queue
(def log-queue (lm/channel))
(defn register-log-source [host lazy-lines]
  (future
    (doseq [line lazy-lines]
      (lm/enqueue log-queue [host line]))))


;; mapping from hostname to open line-seq on dea.log (via ssh/tail-f)
(def running-deas (agent {}))
(defn update-running-deas
  "Update the running-deas agent with new set of deas from AWS"
  [curr]
  (let [hosts (split-lines (run "scripts/print-running-deas"))]
    (loop [newhosts (remove curr hosts)
           nxt      curr]
      (if (empty? newhosts)
        nxt
        (let [host       (first newhosts)
              tailer     (register-log-source host (dea-tail-f host))]
          (println "Added new host: " host)
          (recur (next newhosts)
                 (assoc nxt host tailer)))))))



(defn -main []
  (println "finding initial list of running deas")
  (send running-deas update-running-deas)
  (loop []
    (let [[src log] (lm/wait-for-message log-queue)]
      (println (format "%.15s: %s" src log)))
    ; (println (format "%d log entries; from %d dea's" (count log-queue) (count @running-deas)))

    ;; (send running-deas update-running-deas)
    (recur)))
  

    

