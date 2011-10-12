(ns horizon.sink
  (use [lamina.core :only (channel permanent-channel enqueue wait-for-message)]
       [horizon.cloud :as cloud]
       [horizon.util :only (run run-line-seq)]))

;; A queue of logs from all components with the following format:
;; <component>-<component-host>-<actual-log-record>
(defonce ^{:private false} queue (permanent-channel))

(defn- enqueue-from-lazy-seq
  "Create a thread that enqueues the channel with items from lazy seq."
  [ch lazyseq]
  (future
    (doseq [e lazyseq]
      (enqueue ch e))))


;; An agent representing the currently running components in the
;; cloud, with reference to their log sinker threads
(defonce ^{:private true} running-components (agent {}))

(defn- update-running-components
  "Update the running components in the cloud"
  [agt]
  (let [components (cloud/component-logs cloud/sandbox)]
    ;; TODO - remove obsolete components from agt
    (println "updating with comps: " components)
    (reduce (fn [newagt comp]
              (if (newagt comp)
                newagt
                (do
                  (println "adding comp: " comp)
                  (assoc newagt comp
                       (enqueue-from-lazy-seq
                        queue
                        ((components comp)))))))
            agt
            (keys components))))

(defn- initialize-running-components
  []
  (send running-components update-running-components))

(defn initialize
  "Initialize log processing from EC2"
  []
  (println "sink: initializing log processing")
  (initialize-running-components))

(defn next-record
  "Return the next available log record. Block until one is available."
  []
  (wait-for-message queue))

(defn -main []
  (initialize)
  (loop []
    (let [[src log] (next-record)]
      (println (format "%.15s:    %s" src log)))
    ; (println (format "%d log entries; from %d dea's" (count log-queue) (count @running-deas)))
    ;; TODO - (send running-deas update-running-deas)
    (recur)))
