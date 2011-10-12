(ns horizon.event
  (:use [lamina.core :only (enqueue permanent-channel lazy-channel-seq)])
  (:require [horizon.record :as record]
            [horizon.sink :as sink]))

;; Events for last N minutes -- must deprecate
(defonce ^{:private false} current-events (atom []))
(defn- add
  "Add a log record to events"
  [record]
  (swap! current-events (partial cons record)))

(defonce ^{:private false} queue (permanent-channel))

;; TODO - write shutdown; store (future ...) val? how?
(defn initialize
  "Initialize processing of records from sink"
  []
  (future
    (println "event: initializing record processing")
    (doseq [record-str (lazy-channel-seq sink/queue)]
      ;; (when (and (not (re-find #"to .+ du" record-str))
      ;;            (re-find #"dea" record-str))
      ;;   (println ":: " record-str))
      (when-let [record (record/parse-line record-str)]
        (record/print-record record) ;; for debug
        (enqueue queue record)
        (add record)))))