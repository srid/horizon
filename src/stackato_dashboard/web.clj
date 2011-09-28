(ns stackato-dashboard.web
  (:use compojure.core
        ring.middleware.stacktrace
        [ring.util.response :only [response]]
        [hiccup.middleware :only (wrap-base-url)]
        hiccup.core
        hiccup.page-helpers
        lamina.core
        aleph.http)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]
            [stackato-dashboard.event :as event]
            [stackato-dashboard.record :as record]))

(defn app-html [record]
  (let [url (first (:uris (:json record)))
        url (if url (str "http://" url))]
    [:b [:a {:href url :target "_blank"} (:appname record)]]))

(defn record-html [[host record]]
  [:li
   [:b (record/format-log-datetime record)] " "
   (condp = (:type record)
     :instance-ready-for-connections
     [:span "DEA has deployed: " (app-html record)]
     :received-start-message
     [:span "DEA is deploying: " (app-html record) " by " (first (:users record)) " ...."]
     (str "unknown record type " (:type record)))
   [:small [:pre (str record)]]])

(defn main-page [events]
  (html5
   [:head
    [:title "Stackato Doctor"]
    (include-css "/css/lessframework.css")
    (include-css "/css/style.css")
    (include-css "http://fonts.googleapis.com/css?family=PT+Sans+Caption")
    (include-js "/cljs/bootstrap.js")]
   [:body
    [:h1 "Stackato Doctor"]
    [:ul {:id "events"}
    (for [evt events]
      (record-html [nil evt]))]
    (javascript-tag "stackato.init();")]))

(defn event-queue-handler [request]
  {:status 200
   :headers {"content-type" "text/html"}
   :body (map* #(html (record-html %)) event/event-queue)})

(defroutes app-routes
  (GET "/" []  (main-page (seq @event/current-events)))
  (GET "/events" [] event-queue-handler)
  
  (route/resources "/")
  (route/not-found "Page not found"))

(def server (atom nil))

(defn initialize []
  (if @server
    (println "Warning: already initialized")
    (let [port 8001]
      (println (format "Starting http://localhost:%s/" port))
      (swap! server (fn [_] (start-http-server
                             (wrap-ring-handler app-routes)
                             {:port port}))))))

(defn shutdown []
  (when @server
    (do
      (println "Shutting down web server")
      (@server)
      (swap! server (fn [_] nil)))))

(defn reinitialize []
  "Run this on the REPL to reload web.clj and restart the web server"
  (stackato-dashboard.web/shutdown)
  (use :reload-all 'stackato-dashboard.web)
  (stackato-dashboard.web/initialize))

(defn -main []
  (initialize))
