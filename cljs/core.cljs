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
  (let [tab         (.target e)
        tab-title   (. tab (getCaption))
        tab-content (dom/getElement (str tab-title "_content"))
        content     (dom/getElement (str (. tabbar (getId)) "_content"))]
    (set! (.innerHTML content) (.innerHTML tab-content))
    (when-let [all-users (dom/findNode content #(= "all-users" (.getAttribute % "id")))]
      (table-make-sortable all-users))))

(def events (.getValues goog.object goog.ui.Component/EventType))

(defn ^:export init [n]
  (.decorate tabbar (.getElement goog.dom "maintab"))
  (.listen goog.events
           tabbar
           goog.ui.Component.EventType/SELECT
           (partial handle-tab-select tabbar)))
