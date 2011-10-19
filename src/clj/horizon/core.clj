(ns horizon.core
  (:require [horizon.sink :as sink]
            [horizon.event :as event]
            [horizon.web :as web]
            [horizon.cloud :as cloud]
            [horizon.db :as db])
  (:gen-class))

(defn initialize [mode]
  (apply println (take 25 (repeat "*")))
  (println "* Horizon is initializing for: " mode)
  (apply println (take 25 (repeat "*")))
  (db/initialize mode)
  (sink/initialize mode)
  (event/initialize)
  (web/initialize))

(declare main)
(defn -main [& args]
  (initialize (cloud/args->mode args)))
