(ns horizon.event
  (:use [lamina.core :as lm])
  (:require [horizon.record :as record]
            [horizon.sink :as sink]))

;; Events for last N minutes -- must deprecate
(defonce ^{:private false} current-events (atom []))
(defn add
  "Add a log record to events"
  [record]
  (when (:type record)
    (swap! current-events (partial cons record))))

(defonce ^{:private false} event-queue (lm/permanent-channel))

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