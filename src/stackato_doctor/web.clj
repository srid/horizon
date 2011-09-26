(ns stackato-doctor.web
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
            [stackato-doctor.event :as event]
            [stackato-doctor.record :as record]))

(defn app-html [record]
  (let [url (first (:uris (:json record)))
        url (if url (str "http://" url))]
    [:b [:a {:href url :target "_blank"} (:appname record)]]))

(defn record-html [record]
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
    (include-css "http://fonts.googleapis.com/css?family=PT+Sans+Caption")]
   [:body
    [:h1 "Stackato Doctor"]
    [:ul {:id "events"}
    (for [evt events]
      (record-html evt))]]))

;; test
(defn stream-something [ch]
  (future
    (dotimes [i 100]
      (enqueue ch (str i "\n")))
    (close ch)))
(defn aleph-handler [request]
  (println "In handler")
  (let [stream (channel)]
    (stream-something stream)
    {:status 200
     :headers {"content-type" "text/plain"}
     :body stream}))

(defroutes app-routes
  (GET "/" []  (main-page (seq @event/*current-events*)))
  (GET "/events" [] aleph-handler)
  
  (route/resources "/")
  (route/not-found "Page not found"))

(def server (atom nil))

(defn initialize []
  (if @server
    (println "Warning: already initialized")
    (do
      (println "Starting http://localhost:9000/")
      (swap! server (fn [_] (start-http-server
                             (wrap-ring-handler app-routes)
                             {:port 9000}))))))

(defn shutdown []
  (when @server
    (do
      (println "Shutting down web server")
      (@server)
      (swap! server (fn [_] nil)))))

(defn reinitialize []
  "Run this on the REPL to reload web.clj and restart the web server"
  (stackato-doctor.web/shutdown)
  (use :reload-all 'stackato-doctor.web)
  (stackato-doctor.web/initialize))

(defn -main []
  (initialize))