(ns stackato-doctor.core
  (:require [stackato-doctor.record :as record]
            [stackato-doctor.sink :as sink]))

(defn -main
  []
  (sink/initialize)
  (loop [[host record] (sink/next-log-record)]
    (-> record record/parse-log-record (record/print-log-record host))
    (recur (sink/next-log-record))))
