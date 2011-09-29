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
  ;; TODO - service bindings
  (let [[users apps routes sb] (load-data)]
    (letfn [(apps-by-user [user] (filter #(= (:owner_id %) (:id user)) (vals apps)))
            (routes-by-app [app] (filter #(= (:app_id %) (:id app)) (vals routes)))]
      (for [user (vals users)]
        (let [my-apps (apps-by-user user)
              my-apps (for [app my-apps]
                        (merge app {:routes (routes-by-app app)}))]
          (merge user {:apps my-apps}))))))