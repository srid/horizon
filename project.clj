(defproject horizon "1.0.0-beta5"
  :description "Stackato dashboard"
  :dependencies [[org.clojure/clojure "1.2.1"]
                 [org.clojure/data.json "0.1.1"]
                 [org.clojure/java.jdbc "0.0.6"]
                 [clojureql "1.0.0"]
                 [clj-time "0.3.0"]
                 [clansi "1.0.0"]
                 [org.xerial/sqlite-jdbc "3.7.2"]
                 [aleph "0.2.0-rc1"]
                 [hiccup "0.3.6"]
                 [enlive "1.0.0"]
                 [compojure "0.6.4"]
                 [ring "0.3.11"]]

  ;; reduce RSS for an acceptable run in uCloud VMs
  :jvm-opts ["-Xmx16m" "-XX:MaxPermSize=64m" "-XX:+CMSClassUnloadingEnabled"]

  ;; websockets won't work on ring-server
  :dev-dependencies [[lein-ring "0.4.5"]]
  :ring {:handler horizon.web/app-routes
         :init horizon.core/initialize}
  
  :source-path "src/clj"
  :main horizon.core)
