(ns stackato-doctor.event
  (:use [lamina.core :as lm])
  (:require [stackato-doctor.record :as record]
            [stackato-doctor.sink :as sink]))

;; Events for last N minutes -- must deprecate
(def *current-events* (atom []))
(defn add
  "Add a log record to events"
  [record]
  (when (:type record)
    (swap! *current-events* (partial cons record))))

(def event-queue (lm/channel))

;; TODO - write shutdown; store (future ...) val? how?
(defn initialize
  "Initialize processing of records from sink"
  []
  (future
    (println "event: initializing record processing")
    (loop [[host record] (sink/next-log-record)]
      (let [record (record/parse-log-record record)]
        (when (:type record)
          (do
            (record/print-log-record record host) ;; for debug
            (lm/enqueue event-queue [host record])))
        (add record))
      (recur (sink/next-log-record)))))
  