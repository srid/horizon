;; From
;; https://github.com/neotyk/ws-cljs/blob/master/src/cljs/logger.cljs

(ns horizon.logger
  (:require [goog.debug :as debug]
            [goog.debug.DivConsole :as div-console]
            [goog.debug.Logger :as log]
            [goog.debug.LogManager :as log-manager]
            [goog.debug.Logger.Level :as level]
            [goog.dom :as dom]))

;; Log
(defn info [category msg]
  (let [logger (goog.debug.Logger/getLogger (name category))]
    (.info logger msg)))

(defn warn [category msg]
  (let [logger (goog.debug.Logger/getLogger (name category))]
    (.warning logger msg)))

(defn debug [categoty msg]
  (let [logger (goog.debug.Logger/getLogger (name categoty))]
    (.fine logger msg)))

(defn init [id]
  (let [win (goog.debug.DivConsole. (dom/getElement id))]
    (-> (log-manager/getRoot)
        (.setLevel level/ALL))
    (.setCapturing win true)))