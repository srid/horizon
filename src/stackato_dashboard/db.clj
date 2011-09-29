(ns stackato-dashboard.db
  (:use [clojure.java.jdbc :only (with-connection with-query-results)])
  (:require [clojureql.core :as q]))

(def db {:classname "org.sqlite.JDBC"
         :subprotocol "sqlite"
         :subname "/Users/sridharr/cloudcontroller.sqlite3"})

(q/open-global db)

(defn play []
  [@(q/table :apps) @(q/table :users) @(q/table :service_bindings)])

