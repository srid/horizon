(ns stackato-doctor.core
  (:require [stackato-doctor.sink :as sink]
            [stackato-doctor.event :as event]))

(defn initialize []
  (sink/initialize)
  (event/initialize))

(defn -main []
  (initialize))
