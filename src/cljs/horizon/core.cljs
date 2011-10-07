(ns horizon.core
  (:require [horizon.event :as event]
            [horizon.ui :as ui]))

(defn ^:export init [n]
  (ui/init)
  (event/init))