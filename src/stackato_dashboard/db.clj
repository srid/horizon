(ns stackato-dashboard.db
  (:require [clojureql.core :as cql]
            [java.jdbc :as sql]))

(def db {:classname "org.sqlite.JDBC"
         :subprotocol "sqlite"
         :subname "/Users/sridharr/cloudcontroller.sqlite3"})

(defn play []
  (sql/with-connection db
    (cql/with-results [rs (cql/table :apps)]
      (doseq [r rs] (println (:name r))))))