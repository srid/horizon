(ns horizon.event
  (:use lamina.core)
  (:require [horizon.record :as record]
            [horizon.sink :as sink]))

(defonce all-events (permanent-channel))
(defonce ^{:private false} cloud-events (permanent-channel))
(defonce ^{:private false} hm-events (permanent-channel))

;; last N cloud events from the above queue
(def events-to-save 20)
(defonce ^{:private false} cloud-events-saved (atom []))

(defn initialize []
  (println "event: initializing record processing")
  (receive-all sink/queue #(when-let [record (record/parse-line %)]
                             (when-not (= "hm_analyzed" (:event_type record))
                               (record/print-record record))
                             (enqueue all-events record)))
  (siphon (remove* (comp #{"hm_analyzed"} :event_type) all-events)
          cloud-events)
  (siphon (filter* (comp #{"hm_analyzed"} :event_type) all-events)
          hm-events)
  (receive-all cloud-events
               (fn [event]
                 (swap! cloud-events-saved
                        #(take events-to-save
                               (reverse (sort-by :datetime (cons event %))))))))
