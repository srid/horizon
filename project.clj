(defproject horizon "1.0.0-SNAPSHOT"
  :description "Stackato dashboard"
  :dependencies [[org.clojure/clojure "1.2.1"]
                 [org.clojure/tools.logging "0.2.0"]
                 [org.clojure/data.json "0.1.1"]
                 [org.clojure/java.jdbc "0.0.6"]
                 [clojureql "1.0.0"]
                 [clj-time "0.3.0"]
                 [clansi "1.0.0"]
                 [org.xerial/sqlite-jdbc "3.7.2"]
                 [lamina "0.4.0-beta2"]
                 [aleph "0.2.0-beta2"]
                 [hiccup "0.3.6"]
                 [compojure "0.6.4"]
                 [ring "0.3.11"]]
  :source-path "src/clj"
  :main horizon.core)
