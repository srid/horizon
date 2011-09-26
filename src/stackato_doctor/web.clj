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
            [stackato-doctor.event :as event]))

(defn main-page [content]
  (html5
   [:head
    [:title "Stackato Doctor"]
    (include-css "/css/lessframework.css")
    (include-css "/css/style.css")
    (include-css "http://fonts.googleapis.com/css?family=PT+Sans+Caption")]
   [:body
    [:h1 "Stackato Doctor"]
    [:pre content]]))

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
  (GET "/" []  (do (println "some") (main-page (str @event/*current-events*))))
  (GET "/events" [] (do (println "streaming") aleph-handler))
  
  (route/resources "/")
  (route/not-found "Page not found"))

(defn -main []
  (println "Starting http://localhost:8080/")
  (start-http-server (wrap-ring-handler app-routes) {:port 8080}))
