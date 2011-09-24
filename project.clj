(defproject stackato-doctor "1.0.0-SNAPSHOT"
  :description "Analyse Stackato log files"
  :dependencies [[org.clojure/clojure "1.2.1"]
                 [org.clojure/clojure-contrib "1.2.0"]
                 [org.clojure/tools.logging "0.2.0"]
                 [incanter "1.2.2"]
                 [clj-time "0.3.0"]
                 [clansi "1.0.0"]
                 [lamina "0.4.0-beta1"]
                 [aleph "0.2.0-beta1"]
                 [compojure "0.6.4"]
                 [enlive "1.0.0"]
                 [ring "0.3.11"]]
  :dev-dependencies [[lein-ring "0.4.5"]]
  :main stackato-doctor.web)
