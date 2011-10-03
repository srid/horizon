(ns stackato
  (:require [goog.dom :as dom]
            [goog.object :as goog-object]
            [goog.events.Event :as goog-event]
            [goog.events.EventType :as goog-event-type]
            [goog.ui.TableSorter :as TableSorter]
            [goog.ui.Tab :as Tab]
            [goog.ui.TabBar :as TabBar]))

(def tabbar (goog.ui.TabBar.))
(def tablesorter (goog.ui/TableSorter.))

(defn handle-tab-select [tabbar e]
  (let [tab      (.target e)
        title    (. tab (getCaption))
        content  (dom/getElement (str title "_content"))]
    ;; prim-seq is required to seq through a node collection
    (doseq [e (prim-seq (dom/getChildren (dom/getElement (.parentNode content))) 0)]
      (goog.style.showElement e false))
    (window.p title)
    (window.p content)
    (goog.style.showElement content true)))

(defn ^:export init [n]
  ;; Setup all-users table to be sortable
  (.decorate tablesorter (dom/getElement "all-users"))
  (doseq [index [0 1 2 3 4]]
    (.setSortFunction tablesorter index
                      (TableSorter/createReverseSort
                       TableSorter/alphaSort)))
  (.sort tablesorter 4)

  ;; Setup the tabbar
  (.decorate tabbar (.getElement goog.dom "maintab"))
  (.listen goog.events
           tabbar
           goog.ui.Component.EventType/SELECT
           (partial handle-tab-select tabbar))
  (.setSelectedTabIndex tabbar 1))
