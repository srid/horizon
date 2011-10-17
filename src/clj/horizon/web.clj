(ns horizon.web
  (:use compojure.core
        ring.middleware.reload
        ring.middleware.stacktrace
        [hiccup.core :only (html)]
        hiccup.page-helpers
        [clj-time.format :only (parse unparse formatter formatters)]
        lamina.core
        aleph.http
        [horizon.util :only (render-to-response)])
  (:require [compojure.route :as route]
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
     "cc_start"
     [:span "CC is starting: " (record-app-html record) " by " (first (:users record)) " ...."]
     "mongo_provision"
     [:span "Provisioning new service: " [:b (:service-label record)]]
     [:span
      [:i "unknown event: "]
      [:pre (str record)]])])


(defn parse-sqlite-datetime
  [s]
  (parse (clojure.string/replace s " " "T")))

(defn sortable-datetime-html
  [dt]
  (let [sortrepr  (unparse (formatters :basic-ordinal-date-time-no-ms) dt)
        humanrepr (unparse (formatter "EEE, dd MMM yyyy HH:mm:ss") dt)]
    [:span
     [:span {:style "display: none;"} sortrepr]
     humanrepr]))


(defn deflate-users
  [users]
  (apply concat
         (for [user users]
           (for [app (:apps user)]
             [app user]))))

(defn first-url-of-app
  [app]
  (str "http://" (:url (first (:routes app)))))

(h/defsnippet cloud-events "horizon/templates/cloud-events.html" [[:div]]
  [current-events]
  [:div :ul#events :li]
  (h/clone-for [evt current-events]
               (h/html-content
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
   [:.user-registered]   (h/html-content (html
                                          (sortable-datetime-html
                                           (parse-sqlite-datetime
                                            (:created_at user)))))
   [:td.user-apps]       (h/content (str (count (:apps user))))))

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
   [:.last-updated]     (h/html-content (html
                                         (sortable-datetime-html
                                          (parse-sqlite-datetime
                                           (:updated_at app)))))
   [:td.app-services :a.service-template]
   (h/clone-for [srv (:services app)]
                (h/do->
                 (h/content (:service-name srv))
                 (h/set-attr :title (:alias srv))))))

(h/deftemplate index "horizon/templates/main.html"
  [users]
  [:div#Cloud_events_content]
  (h/content (cloud-events
              (reverse (sort-by :datetime (take 20 @event/current-events)))))
  [:div#Apps_content]
  (h/content (apps-table users))
  [:div#Users_content]
  (h/content (users-table users)))

(defn main-view []
  (render-to-response (index (db/get-data))))

(defn events-websocket-handler
  [ch request]
  (siphon (map* #(str (html (record-html %)) "\n") event/queue) ch))

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
    (swap! server
           (fn [_] (start-http-server
                    (wrap-ring-handler
                     (-> app-routes
                         (wrap-reload '(horizon.web horizon.record))
                         (wrap-stacktrace)))
                    {:port port :websocket true})))))

(defn -main []
  (initialize))
