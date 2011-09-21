(ns stackato-doctor.web
  (:use compojure.core
        ring.middleware.stacktrace
        [ring.util.response :only [response]]
        [hiccup.middleware :only (wrap-base-url)]
        hiccup.core
        hiccup.page-helpers)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]
            [stackato-doctor.event :as event]))

(defn main-page [content]
  (html5
   [:head
    [:title "Stackato Doctor"]
    (include-css "/css/lesdsframework.css")
    (include-css "/css/style.css")
    (include-css "http://fonts.googleapis.com/css?family=PT+Sans+Caption")]
   [:body
    [:h1 "Stackato Doctor"]
    [:pre content]]))

(defroutes app-routes
  (GET "/" []  (main-page (str @event/*current-events*)))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app-handler
  (-> (handler/site app-routes)
      wrap-stacktrace
      wrap-base-url))
