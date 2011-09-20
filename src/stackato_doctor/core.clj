(ns stackato-doctor.core
  (:require [stackato-doctor.record :as record]
            [stackato-doctor.sink :as sink]
            [stackato-doctor.event :as event]))

(defn initialize []
  (sink/initialize))

(defn -main []
  (initialize)
  (loop [[host record] (sink/next-log-record)]
    (let [record (record/parse-log-record record)]
      (record/print-log-record record host)
      (event/add record))
    (recur (sink/next-log-record))))
