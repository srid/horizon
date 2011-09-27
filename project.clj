(defproject stackato-dashboard "1.0.0-SNAPSHOT"
  :description "Stackato dashboard"
  :dependencies [[org.clojure/clojure "1.2.1"]
                 [org.clojure/clojure-contrib "1.2.0"]
                 [org.clojure/tools.logging "0.2.0"]
                 [clojureql "1.0.0"]
                 [org.xerial/sqlite-jdbc "3.7.2"]
                 [clj-time "0.3.0"]
                 [clansi "1.0.0"]
                 [lamina "0.4.0-beta1"]
                 [aleph "0.2.0-beta1"]
                 [compojure "0.6.4"]
                 [enlive "1.0.0"]
                 [ring "0.3.11"]]
  :main stackato-dashboard.core)
