(ns stackato
  (:require [goog.dom :as dom]
            [goog.ui.TableSorter :as TableSorter]))

(defn ^:export init [n]
  ;; Make all-users table sortable
  (let [component (goog.ui/TableSorter.)]
    (doto component
      (.decorate (dom/getElement "all-users"))
      (.setSortFunction 1 TableSorter/alphaSort)
      (.setSortFunction 2 (TableSorter/createReverseSort
                           TableSorter/alphaSort)))))
