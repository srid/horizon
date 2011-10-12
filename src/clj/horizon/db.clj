(ns horizon.db
  (:use [clojure.java.jdbc :only (with-connection with-query-results)])
  (:require [clojureql.core :as q]
            [horizon.cloud :as cloud]))

(def db {:classname "org.sqlite.JDBC"
         :subprotocol "sqlite"
         :subname (cloud/cloudcontroller-db cloud/envconfig)})

(q/open-global db)

(defn- load-data
  "Load data from SQLite into memory"
  []
  (letfn [(hash-by-id [items] (zipmap (map #(:id %) items) items))]
    (map (comp hash-by-id deref) [(q/table :users)
                                  (q/table :apps)
                                  (q/table :routes)
                                  (q/table :service_bindings)
                                  (q/table :service_configs)
                                  (q/table :services)])))

(defn- filter-by-presence
  [row table pk]
  (filter #(= (pk %) (:id row)) table))

(defn- assoc-service-info
  [row sc srv]
  (let [cfg (sc  (:service_config_id row))
        s   (srv (:service_id cfg))]
    (assoc row
      :service-name (:name s)
      :alias (:alias cfg))))

(defn get-data
  "Load the cloud controller database into memory"
  []
  (let [[users apps routes sb sc srv] (load-data)]
    (for [user (vals users)]
      (assoc user
        :apps (for [app (filter-by-presence user (vals apps) :owner_id)]
                (assoc app
                  :routes   (filter-by-presence app (vals routes) :app_id)
                  :services (map #(assoc-service-info % sc srv)
                                 (filter-by-presence app (vals sb) :app_id))))))))
