(ns stackato-doctor.web
  (:use compojure.core
        ring.middleware.stacktrace
        [hiccup.middleware :only (wrap-base-url)])
  (:require [compojure.route :as route]
            [compojure.response :as response]))

(defroutes app-routes
  (GET "/" []  "This is a test response!")
  (route/resources "/")
  (route/not-found "Page not found"))

(def app-handler
  (-> app-routes
      wrap-stacktrace
      wrap-base-url))
