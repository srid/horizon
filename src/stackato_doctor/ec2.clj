(ns stackato-doctor.ec2
  (use [clojure.contrib.shell-out :only (sh)]
       [clojure.contrib.string :only (split-lines)])
  (:import [org.apache.commons.exec
            CommandLine
            DefaultExecutor
            ExecuteWatchdog]))

(defn run
  "Return stdout only"
  [cmd]
  ((sh cmd :return-map true) :out))

(defn dea-hostnames
  "Return the hostname of running DEA"
  []
  (println "Running print-running-deas ...")
  (split-lines (run "scripts/print-running-deas")))

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

;; mapping from hostname to open line-seq on dea.log (via ssh/tail-f)
(def running-deas (agent #{}))

;; Agent to track incoming log entries from multiple DEA's
;; It is a list of [source, log-entry] where source is the DEA's host
(def incoming-log (agent clojure.lang.PersistentQueue/EMPTY))

(defn push-log
  "Recursive send handler to start consuming log entries from the lazy-seq."
  [logs source lines]
  (send incoming-log push-log source (rest lines))
  (conj logs [source (first lines)]))

(defn pop-log
  "Pop the oldest entry from the log; return nil if none available"
  []
  (when-not (empty? @incoming-log)
    (let [peeked (peek @incoming-log)]
      (send incoming-log pop)
      peeked)))

(defn register-log-source
  "Register send handler for this log source and its lazy-seq and return
immediately."
  [source lazy-lines]
  (send incoming-log push-log source lazy-lines))

(defn update-running-deas
  "Update the running-deas agent with new set of deas from AWS"
  [curr]
  (let [hosts (dea-hostnames)]
    (loop [newhosts (remove curr hosts)
           nxt      curr]
      (if (empty? newhosts)
        nxt
        (let [host       (first newhosts)
              lazy-lines (dea-tail-f host)]
          (println "Adding new host: " host)
          (register-log-source host lazy-lines)
          (recur (next newhosts)
                 (conj nxt host)))))))


(defn -oldmain []
  (println (update-running-deas {})))

(defn -main []
  (println "finding initial list of running deas")
  (send running-deas update-running-deas)
  (loop []
    (println (format "%d log entries; %d dea's: %s" (count @incoming-log) (count @running-deas) @running-deas))
    (when (> (count @incoming-log) 0)
      (let [[src lg] (pop-log)]
        (println (format "  %s" src))
        (println (format "  %s" lg))))
    ;; (send-off running-deas update-running-deas)
    (Thread/sleep 4000)
    (recur)))
  

    

