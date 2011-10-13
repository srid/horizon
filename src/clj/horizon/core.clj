(ns horizon.core
  (:require [horizon.sink :as sink]
            [horizon.event :as event]
            [horizon.web :as web]
            [horizon.cloud :as cloud])
  (:gen-class))

(defn initialize []
  (println "Horizon is initializing for: " cloud/envconfig)
  (sink/initialize)
  (event/initialize)
  (web/initialize))

(declare main)
(defn -main [& args]
  (initialize))
