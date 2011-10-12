(ns horizon.core
  (:require [horizon.sink :as sink]
            [horizon.event :as event]
            [horizon.web :as web]
            [horizon.cloud :as cloud]))

(defn initialize []
  (println "Horizon is initializing for: " cloud/envconfig)
  (sink/initialize)
  (event/initialize)
  (web/initialize))

(defn -main []
  (initialize))
