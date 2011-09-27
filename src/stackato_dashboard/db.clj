(ns stackato-dashboard.db
  (:use [clojure.java.jdbc :only (with-connection with-query-results)]))

(def db {:classname "org.sqlite.JDBC"
         :subprotocol "sqlite"
         :subname "/Users/sridharr/cloudcontroller.sqlite3"})

(defn play []
  (with-connection db
    (with-query-results rs ["select * from apps"]
      (doseq [r rs] (println (:name r))))))