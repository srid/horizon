(ns horizon.core
  (:require [horizon.sink :as sink]
            [horizon.event :as event]
            [horizon.web :as web]
            [horizon.cloud :as cloud]
            [horizon.db :as db])
  (:gen-class))

(defn initialize []
  (apply println (take 25 (repeat "*")))
  (println "* Horizon is initializing for: " @cloud/mode)
  (apply println (take 25 (repeat "*")))
  (db/initialize)
  (sink/initialize)
  (event/initialize)
  (web/initialize))

(declare main)
(defn -main [& args]
  (cloud/set-mode! args)
  (initialize))
