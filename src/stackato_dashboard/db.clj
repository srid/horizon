(ns stackato-dashboard.db
  (:use [clojure.java.jdbc :only (with-connection with-query-results)])
  (:require [clojureql.core :as q]))

(def db {:classname "org.sqlite.JDBC"
         :subprotocol "sqlite"
         :subname "/Users/sridharr/cloudcontroller.sqlite3"})

(q/open-global db)

(defn load-data
  "Load data from SQLite into memory"
  []
  (letfn [(hash-by-id [items] (zipmap (map #(:id %) items) items))]
    (map (comp hash-by-id deref) [(q/table :users)
                                  (q/table :apps)
                                  (q/table :routes)
                                  (q/table :service_bindings)])))

(defn get-users
  "Return users, their apps, routes, and services"
  []
  (let [[users apps routes sb] (load-data)]
    (for [user (vals users)]
      (let [uapps (filter #(= (:owner_id %) (:id user)) (vals apps))]
        (merge user {:apps (for [app uapps]
                             (merge app {:routes (filter #(= (:app_id %) (:id app)) (vals routes))}))})))))