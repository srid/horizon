(ns stackato-doctor.event
  (:require [stackato-doctor.record :as record]
            [stackato-doctor.sink :as sink]))

;; Events for last N minutes
(def *current-events* (atom []))

(defn add
  "Add a log record to events"
  [record]
  (when (:type record)
    (swap! *current-events* (partial cons record))))

;; TODO - write shutdown; store (future ...) val? how?
(defn initialize
  "Initialize processing of records from sink"
  []
  (future
    (println "event: initializing record processing")
    (loop [[host record] (sink/next-log-record)]
      (let [record (record/parse-log-record record)]
        (record/print-log-record record host) ;; for debug
        (add record))
      (recur (sink/next-log-record)))))
  