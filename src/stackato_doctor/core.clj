(ns stackato-doctor.core
  (:require [stackato-doctor.sink :as sink]
            [stackato-doctor.event :as event]
            [stackato-doctor.web :as web]))

(defn initialize []
  (sink/initialize)
  (event/initialize)
  (web/initialize))

(defn -main []
  (initialize))
