(ns horizon.core
  (:require [horizon.sink :as sink]
            [horizon.event :as event]
            [horizon.web :as web]))

(defn initialize []
  (sink/initialize)
  (event/initialize)
  (web/initialize))

(defn -main []
  (initialize))
