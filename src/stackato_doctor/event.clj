(ns stackato-doctor.event)

;; Events for last N minutes
(def *current-events* (atom []))

(defn add
  "Add a log record to events"
  [record]
  (when (:type record)
    (swap! *current-events* (partial cons record))))
