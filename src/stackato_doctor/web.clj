(ns stackato-doctor.web
  (:use compojure.core
        ring.middleware.stacktrace
        [hiccup.middleware :only (wrap-base-url)])
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]
            [stackato-doctor.event :as event]))

(defroutes app-routes
  (GET "/" []  (str @event/*current-events*))
  (route/resources "/")
  (route/not-found "Page not found"))

(def app-handler
  (-> (handler/site app-routes)
      wrap-stacktrace
      wrap-base-url))
