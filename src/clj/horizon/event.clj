(ns horizon.event
  (:use [lamina.core :only (enqueue permanent-channel receive-all)])
  (:require [horizon.record :as record]
            [horizon.sink :as sink]))

(defonce ^{:private false} queue (permanent-channel))

;; TODO - write shutdown; store (future ...) val? how?
(defn initialize
  "Initialize processing of records from sink"
  []
  (future
    (println "event: initializing record processing")
    (receive-all sink/queue #(when-let [record (record/parse-line %)]
                               (record/print-record record)
                               (enqueue queue record)))))