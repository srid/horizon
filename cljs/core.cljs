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

(defn table-make-sortable [element]
  ;; Make all-users table sortable
  (doto tablesorter
    (.decorate element)
    (.setSortFunction 0 TableSorter/alphaSort)
    (.setSortFunction 1 TableSorter/alphaSort)
    (.setSortFunction 2 TableSorter/alphaSort)
    (.setSortFunction 4 (TableSorter/createReverseSort
                         TableSorter/alphaSort))
    (.sort 4)))

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

(def events (.getValues goog.object goog.ui.Component/EventType))

(defn ^:export init [n]
  (table-make-sortable (dom/getElement "all-users"))
  (.decorate tabbar (.getElement goog.dom "maintab"))
  (.listen goog.events
           tabbar
           goog.ui.Component.EventType/SELECT
           (partial handle-tab-select tabbar))
  (.setSelectedTabIndex tabbar 1))
