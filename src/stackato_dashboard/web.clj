(ns stackato-dashboard.web
  (:use compojure.core
        ring.middleware.stacktrace
        [ring.util.response :only [response]]
        [hiccup.middleware :only (wrap-base-url)]
        hiccup.core
        hiccup.page-helpers
        lamina.core
        aleph.http)
  (:require [compojure
             [route :as route]
             [handler :as handler]
             [response :as response]]
            [stackato-dashboard
             [event :as event]
             [record :as record]
             [db :as db]]))

(defn app-html2 [record]
  (let [url (first (:uris (:json record)))
        url (if url (str "http://" url))]
    [:b [:a {:href url :target "_blank"} (:appname record)]]))
(defn record-html [[host record]]
  [:li
   [:b (record/format-log-datetime record)] " "
   (condp = (:type record)
     :instance-ready-for-connections
     [:span "DEA has deployed: " (app-html2 record)]
     :received-start-message
     [:span "DEA is deploying: " (app-html2 record) " by " (first (:users record)) " ...."]
     (str "unknown record type " (:type record)))
   [:small [:pre (str record)]]])

(defn inactive-users-table-html [users]
  [:ul
   (for [user users]
     (when-not (seq (:apps user))
       [:li (:email user)]))])

(defn all-users-table-html [users]
  [:table {:id "all-users" :border "0" :cellpang "3"}
   [:thead
    [:tr
     [:th "User"]
     [:th "App"]
     [:th "Framework"]
     [:th "Services"]
     [:th "Last updated"]]]
   [:tbody
    (for [user users]
      (for [app (:apps user)]
        [:tr
         [:td (:email user)]
         [:td [:a {:href (str "http://" (:url (first (:routes app))))} (:name app)]]
         [:td (:framework app)]
         [:td [:div (for [srv (:services app)]
                      [:a (str (:alias srv) " - " (:name srv))])]]
         [:td (:updated_at app)]]))]])


(defn- goog-tab-bar
  "Create a goog.ui.TabBar element"
  [id & tabs]
  [:div
   [:div {:id id :class "goog-tab-bar goog-tab-bar-top"}
    (for [[tab-title tab-content] tabs]
      [:div {:class "goog-tab" :id tab-title} tab-title])]
   [:div {:id "goog-tab-bar-clear"}]
   [:div {:id (str id "_content") :class "goog-tab-content"}
    (for [[tab-title tab-content] tabs]
      [:div {:id (str tab-title "_content") :style "display: none;"} tab-content])
    ]])


(defn main-page [events]
  (html5
   [:head
    [:title "Stackato Dashboard"]
    (include-css "/css/lessframework.css")
    (include-css "http://fonts.googleapis.com/css?family=PT+Sans+Caption")
    (include-css "http://closure-library.googlecode.com/svn/trunk/closure/goog/css/tab.css")
    (include-css "http://closure-library.googlecode.com/svn/trunk/closure/goog/css/tabbar.css")
    (include-css "/css/style.css")
    (include-js "/cljs/bootstrap.js")]
   [:body
    [:header [:h1 "Stackato Dashboard"]]
    (let [users (db/get-data)]
      (goog-tab-bar
       "maintab"
       ["Events"
        [:div
         [:p "Only showing recent events; not real-time yet (needs refreshing)"]
         [:ul {:id "events"}
          (for [evt events]
            (record-html [nil evt]))]]]
       ["State" (all-users-table-html users)]
       ["Inactive Users" (inactive-users-table-html users)]))
    [:footer "Footer"]
    (javascript-tag "window.p = function(x){console.log(x); return x;}; stackato.init();")]))

(defn event-queue-handler [request]
  {:status 200
   :headers {"content-type" "text/html"}
   :body (map* #(html (record-html %)) event/event-queue)})

(defroutes app-routes
  (GET "/" []  (main-page (seq @event/current-events)))
  (GET "/events" [] event-queue-handler)
  
  (route/resources "/")
  (route/not-found "Page not found"))

(defonce server (atom nil))

(defn initialize []
  (let [port 8001]
    (println (format "Starting http://localhost:%s/" port))
    (swap! server (fn [_] (start-http-server
                          (wrap-ring-handler app-routes)
                          {:port port})))))

(defn -main []
  (initialize))
