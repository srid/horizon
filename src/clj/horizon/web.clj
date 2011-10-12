(ns horizon.web
  (:use compojure.core
        ring.middleware.stacktrace
        [ring.util.response :only [response]]
        [hiccup.middleware :only (wrap-base-url)]
        hiccup.core
        hiccup.page-helpers
        [clj-time.format :only (parse unparse formatter formatters)]
        lamina.core
        aleph.http)
  (:require [compojure
             [route :as route]
             [handler :as handler]
             [response :as response]]
            [horizon
             [event :as event]
             [record :as record]
             [db :as db]]))

(defn record-app-html [record]
  (let [url (first (:uris (:json record)))
        url (if url (str "http://" url))]
    [:b [:a {:href url :target "_blank"} (:appname record)]]))
(defn record-html [record]
  [:span {:title (str record)}
   [:b (record/format-log-datetime record)] " -- "
   (condp = (:event_type record)
     "dea_ready"
     [:span "DEA has started: " (record-app-html record)]
     "dea_start"
     [:span "DEA is starting: " (record-app-html record) " by " (first (:users record)) " ...."]
     (str "unknown record type " (:event_type record)))])


(defn parse-sqlite-datetime
  [s]
  (parse (clojure.string/replace s " " "T")))

(defn sqlite-datetime-html
  [s]
  (let [dt        (parse-sqlite-datetime s)
        sortrepr  (unparse (formatters :basic-ordinal-date-time-no-ms) dt)
        humanrepr (unparse (formatter "EEE, dd MMM yyyy HH:mm:ss") dt)]
    [:tt
     [:span {:style "display: none;"} sortrepr]
     humanrepr]))

(defn users-table-html [users]
  [:table {:class "state" :id "users"}
   [:thead
    [:tr
     [:th "User"]
     [:th "Registered"]
     [:th "Apps"]]
    [:tbody
     (for [user users]
       (let [numapps (count (:apps user))]
         [:tr (when (zero? numapps) {:class "inactive"})
          [:td {:class "titlefont"} (:email user)]
          [:td (sqlite-datetime-html (:created_at user))]
          [:td {:class "num"} numapps]]))]]])

(defn apps-table-html [users]
  [:table {:class "state" :id "app" :border "0" :cellpang "3"}
   [:thead
    [:tr
     [:th "App"]
     [:th "User"]
     [:th "Framework"]
     [:th "Services"]
     [:th "Last updated"]]]
   [:tbody
    (for [user users]
      (for [app (:apps user)]
        [:tr
         [:td {:class "titlefont"}
          [:a {:href (str "http://" (:url (first (:routes app))))} (:name app)]]
         [:td (:email user)]
         [:td (:framework app)]
         [:td [:div (for [srv (:services app)]
                      [:a {:title (:alias srv)}
                       (:service-name srv)])]]
         [:td (sqlite-datetime-html (:updated_at app))]]))]])

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
      [:div {:id (str tab-title "_content") :style "display: none;"} tab-content])]])

(defn main-page []
  (html5
   [:head
    [:title "Horizon &mdash; Stackato dashboard"]
    (include-css "/css/lessframework.css")
    (include-css "http://fonts.googleapis.com/css?family=Spinnaker")
    (include-css "http://closure-library.googlecode.com/svn/trunk/closure/goog/css/tab.css")
    (include-css "http://closure-library.googlecode.com/svn/trunk/closure/goog/css/tabbar.css")
    (include-css "/css/style.css")
    (include-js "/cljs/bootstrap.js")]
   [:body
    [:header
     [:h1 "Horizon"]
     [:p "Stackato dashboard"]]
    (let [users (db/get-data)]
      (goog-tab-bar
       "maintab"
       ["Cloud events"
        [:div {:style "height: 400px;"}
         [:i [:p {:style "padding: 1em; width: 75%;"} "Recent activity in the DEAs (CC, HM, ... will be added later).
This list updates in " [:b "real-time"] ". Try pushing/updating an app. "
              [:a {:href "https://github.com/ActiveState/horizon#readme"} "Learn more"]]]
         [:ul {:id "events"}
          [:li "........."]
          (for [evt (take 10 @event/current-events)]
            [:li (record-html evt)])]]]
       ["Apps" (apps-table-html users)]
       ["Users" (users-table-html users)]))
    [:div {:id "log" :style "display: none;"}
     [:h4 "DEBUG"]]
    [:footer [:a {:href "http://stackato.com/"} "ActiveState Stackato"]]
    (javascript-tag "window.p = function(x){console.log(x); return x;}; horizon.core.init();")]))

(defn events-websocket-handler
  [ch request]
  (siphon (map* #(str (html (record-html %)) "\n") event/queue) ch))

(defroutes app-routes
  (GET "/" []  (main-page))
  (GET "/ping" []  "pong")
  (GET "/socket" [] (wrap-aleph-handler events-websocket-handler))
  
  (route/resources "/")
  (route/not-found "Page not found"))

(defonce server (atom nil))

(defn shutdown []
  (@server))

(defn initialize []
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "8000"))]
    (println (format "web: listening at http://localhost:%s/" port))
    (swap! server (fn [_] (start-http-server
                          (wrap-ring-handler (wrap-stacktrace app-routes))
                          {:port port :websocket true})))))

(defn -main []
  (initialize))
