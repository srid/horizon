(defproject stackato-dashboard "1.0.0-SNAPSHOT"
  :description "Stackato dashboard"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [org.clojure/tools.logging "0.2.0"]
                 [org.clojure/data.json "0.1.1"]
                 [org.clojure/java.jdbc "0.0.6"]
                 [clojureql "1.0.0"]
                 [org.xerial/sqlite-jdbc "3.7.2"]
                 [clj-time "0.3.0"]
                 [clansi "1.0.0"]
                 ;; duck1123 maintains a working fork with Clojure 1.3 support
                 [net.kronkltd/lamina "0.4.0-beta2-SNAPSHOT"]
                 [net.kronkltd/aleph "0.2.0-beta2-SNAPSHOT"]
                 [compojure "0.6.4"]
                 [enlive "1.0.0"]
                 [ring "0.3.11"]]
  :repositories {"jiksnu-snapshots" "http://build.jiksnu.com/repository/snapshots"}
  :exclusions [clojure-contrib clojure.contrib clojure.contrib.sql]
  :main stackato-dashboard.core)
