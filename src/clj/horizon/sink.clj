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
  (let [components (cloud/component-logs cloud/envconfig)]
    ;; TODO - remove obsolete components from agt
    (reduce (fn [newagt comp]
              (if (newagt comp)
                newagt
                (do
                  (println "registering component: " comp)
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
