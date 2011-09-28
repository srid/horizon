(ns stackato
  (:require [goog.dom :as dom]
            [goog.ui.Tab :as Tab]
            [goog.ui.TabBar :as TabBar]))

(defn ^:export init [n]
  (str "Hello " n))
