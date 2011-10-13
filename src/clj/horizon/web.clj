(ns horizon.web
  (:use compojure.core
        [hiccup.core :only (html)]
        hiccup.page-helpers
        [clj-time.format :only (parse unparse formatter formatters)]
        lamina.core
        aleph.http
        [horizon.util :only (render-to-response)])
  (:require [compojure
             [route :as route]
             [handler :as handler]]
            [net.cgrand.enlive-html :as h]
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

(defn events-websocket-handler
  [ch request]
  (siphon (map* #(str (html (record-html %)) "\n") event/queue) ch))

(defn deflate-users
  [users]
  (apply concat (for [user users]
                  (for [app (:apps user)]
                    [app user]))))

(defn first-url-of-app
  [app]
  (str "http://" (:url (first (:routes app)))))

(def datetime-readable-format
  (formatter "EEE, dd MMM yyyy HH:mm:ss"))

(def datetime-sortable-format
  (formatters :basic-ordinal-date-time-no-ms))

(defn sqlite-datetime-readable
  [dt]
  (->> dt parse-sqlite-datetime (unparse datetime-readable-format)))

(defn sqlite-datetime-sortable
  [dt]
  (->> dt parse-sqlite-datetime (unparse datetime-sortable-format)))

(h/defsnippet cloud-events "horizon/templates/cloud-events.html" [[:div]]
  [current-events]
  [:div :ul#events :li]
  (h/clone-for [evt current-events] (h/html-content
                                     (html (record-html evt)))))

(h/defsnippet users-table "horizon/templates/users-table.html" [[:table]]
  [users]
  [:table :tbody :tr.row-template]
  (h/clone-for
   [user users]
   [:tr]                 (if (zero? (count (:apps user)))
                           (h/set-attr :class "inactive")
                           identity)
   [:td.user-email]      (h/content (:email user))
   ;; Parametrize the datetime sorter HTML
   [:td.user-registered :.visible-date]   (h/content
                                           (sqlite-datetime-readable
                                            (:created_at user)))
   [:td.user-registered :.sortable-date]   (h/content
                                            (sqlite-datetime-sortable
                                             (:created_at user)))
   [:td.user-apps]  (h/content (str (count (:apps user))))))

(h/defsnippet apps-table "horizon/templates/apps-table.html" [[:table]]
  [users]
  [:table :tbody :tr.row-template]
  (h/clone-for
   [[app user] (deflate-users users)]
   [:td.titlefont :a]   (h/do->
                         (h/content (:name app))
                         (h/set-attr :href (first-url-of-app app)))
   [:td.user-email]     (h/content (:email user))
   [:td.app-framework]  (h/content (:framework app))

   [:td.last-updated :.visible-date]   (h/content
                                        (sqlite-datetime-readable
                                         (:updated_at app)))
   [:td.last-updated :.sortable-date]   (h/content
                                        (sqlite-datetime-sortable
                                         (:updated_at app)))

   [:td.app-services :a.service-template]
   (h/clone-for [srv (:services app)]
                (h/do->
                 (h/content (:service-name srv))
                 (h/set-attr :title (:alias srv))))))

(h/deftemplate index "horizon/templates/main.html"
  [users]
  [:div#Cloud_events_content]
  (h/content (cloud-events (take 10 @event/current-events)))
  [:div#Apps_content]
  (h/content (apps-table users))
  [:div#Users_content]
  (h/content (users-table users)))

(defn main-view
  []
  (render-to-response (index (db/get-data))))

(defroutes app-routes
  (GET "/" [] (main-view))
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
                          (wrap-ring-handler app-routes)
                          {:port port :websocket true})))))

(defn -main []
  (initialize))
