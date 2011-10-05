(ns horizon.core
  (:require [horizon.event :as event]
            [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.object :as goog-object]
            [goog.events.Event :as goog-event]
            [goog.events.EventType :as goog-event-type]
            [goog.ui.TableSorter :as TableSorter]
            [goog.ui.Tab :as Tab]
            [goog.ui.TabBar :as TabBar]))

(def tabbar (goog.ui.TabBar.))
(def apps-tablesorter (goog.ui/TableSorter.))
(def users-tablesorter (goog.ui/TableSorter.))

(defn handle-tab-select [tabbar e]
  (let [tab      (.target e)
        title    (. tab (getCaption))
        content  (dom/getElement (str title "_content"))]
    ;; prim-seq is required to seq through a node collection
    (doseq [e (prim-seq (dom/getChildren (dom/getElement (.parentNode content))) 0)]
      (goog.style.showElement e false))

    ;; remove the green highlight (see events.cljs)
    (if (= "Cloud events" title)
      (classes/remove (dom/getElement "Cloud events") "goog-tab-newactivity"))
    
    (goog.style.showElement content true)))

(defn ^:export init [n]
  ;; Setup app table to be sortable
  (.decorate apps-tablesorter (dom/getElement "app"))
  (doseq [index [0 1 2 3 4]]
    (.setSortFunction apps-tablesorter index
                      (TableSorter/createReverseSort
                       TableSorter/alphaSort)))
  (.sort apps-tablesorter 4)

  ;; Setup users table to be sortable
  (.decorate users-tablesorter (dom/getElement "users"))
  (doseq [index [0 1]]
    (.setSortFunction users-tablesorter index
                      (TableSorter/createReverseSort
                       TableSorter/alphaSort)))
  (.setSortFunction users-tablesorter 2
                    (TableSorter/createReverseSort
                     TableSorter/numericSort))
  (.sort users-tablesorter 2)

  ;; Setup the tabbar
  (.decorate tabbar (.getElement goog.dom "maintab"))
  (.listen goog.events
           tabbar
           goog.ui.Component.EventType/SELECT
           (partial handle-tab-select tabbar))
  (.setSelectedTabIndex tabbar 1)

  ;; Setup cloud events
  (event/init))
