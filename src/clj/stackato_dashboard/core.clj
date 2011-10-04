(ns stackato-dashboard.core
  (:require [stackato-dashboard.sink :as sink]
            [stackato-dashboard.event :as event]
            [stackato-dashboard.web :as web]))

(defn initialize []
  (sink/initialize)
  (event/initialize)
  (web/initialize))

(defn -main []
  (initialize))
