(ns horizon.ui
  (:require [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.object :as goog-object]
            [goog.events.Event :as goog-event]
            [goog.events.EventType :as goog-event-type]
            [goog.ui.TableSorter :as TableSorter]
            [goog.ui.Tab :as Tab]
            [goog.ui.TabBar :as TabBar]))

(def ^:export tabbar (goog.ui.TabBar.))
(def apps-tablesorter (goog.ui/TableSorter.))
(def users-tablesorter (goog.ui/TableSorter.))

(defn ^:export prependChild
  [parent node]
  (dom/insertSiblingBefore node (dom/getFirstElementChild parent)))

(defn ^:export  tabbar-flash
  "Flash the tab unless it is already active"
  [tab-title]
  (let [curr-tab (.. tabbar (getSelectedTab) (getCaption))]
    (when (not= tab-title curr-tab)
      (classes/add (dom/getElement tab-title) "goog-tab-newactivity"))))

(defn- tabbar-clear-flash
  "Clear the flash on a tab"
  [tab-title]
  (classes/remove (dom/getElement tab-title) "goog-tab-newactivity"))

(defn- handle-tab-select [tabbar e]
  (let [tab      (.target e)
        title    (. tab (getCaption))
        content  (dom/getElement (str title "_content"))]
    ;; prim-seq is required to seq through a node collection
    (doseq [e (prim-seq (dom/getChildren (dom/getElement (.parentNode content))) 0)]
      (goog.style.showElement e false))
    (tabbar-clear-flash title)
    (goog.style.showElement content true)))

(defn- init-tables
  []
  (let [reverse-alpha-sort (TableSorter/createReverseSort
                            TableSorter/alphaSort)
        reverse-num-sort   (TableSorter/createReverseSort
                            TableSorter/numericSort)]
    ;; Setup app table to be sortable
    (.decorate apps-tablesorter (dom/getElement "app"))
    (doseq [index [0 1 2 3 4]]
      (.setSortFunction apps-tablesorter index reverse-alpha-sort))
    (.sort apps-tablesorter 4)

    ;; Setup users table to be sortable
    (.decorate users-tablesorter (dom/getElement "users"))
    (doseq [index [0 1]]
      (.setSortFunction users-tablesorter index reverse-alpha-sort))
    (.setSortFunction users-tablesorter 2 reverse-num-sort)
    (.sort users-tablesorter 2)))

(defn- init-tabbar
  []
  (.decorate tabbar (.getElement goog.dom "maintab"))
  (.listen goog.events
           tabbar
           goog.ui.Component.EventType/SELECT
           (partial handle-tab-select tabbar))
  (.setSelectedTabIndex tabbar 1))

(defn ^:export init [n]
  (init-tables)
  (init-tabbar))