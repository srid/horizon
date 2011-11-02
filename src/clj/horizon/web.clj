(ns horizon.web
  (:use compojure.core
        ring.middleware.reload
        [hiccup.core :only (html)]
        hiccup.page-helpers
        [clj-time.format :only (parse unparse formatter formatters)]
        lamina.core
        aleph.http
        aleph.formats
        [horizon.util :only (render-to-response)])
  (:require [compojure.route :as route]
            [net.cgrand.enlive-html :as h]
            [horizon
             [event :as event]
             [record :as record]
             [db :as db]
             [cloud :as cloud]]))

(defn- hm-apps-html [record]
  [:div
   [:strong "Application Status: "]
   [:span (:running record) " running, "]
   [:span (:down record) " down"]])

(defn- record-app-html [record]
  (let [url (first (:uris (:json record)))
        url (if url (str "http://" url))]
    [:b (if url
          [:a {:href url :target "_blank"} (:appname record)]
          (:appname record))]))

(defn- record-html [record]
  [:div {:class (clojure.string/join " " ["event_record" (:event_type record)])}
   [:strong {:class "timestamp"} (record/format-log-datetime record) " "]
   (condp = (:event_type record)
     "dea_ready"
     [:span "Application " (record-app-html record) " has started successfully"]
     "dea_stop"
     [:span "Stopping application " (record-app-html record)]
     "cc_start"
     [:span "Deploying application " (record-app-html record) " by " (first (:users record)) " ...."]
     "mongo_provision"
     [:span "Provisioning new service: " [:b (:service-label record)]]
     "mongo_provisioned"
     [:span "Provisioned a new service"]
     "dea_resource_limit_reached"
     [:span "A DEA has reached its resource limit; no more apps can be deployed"]
     "cc_no_rsrc"
     [:span "CC cannot start an instance due to unavailable DEA's"]
     "monit_message"
     [:span "Monit successfully recovered the " [:b (:process record)] " process"]
     [:span [:i "unknown event: "]]
    )
  ])


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

(h/defsnippet cloud-events-tab "horizon/templates/cloud-events.html" [[:div]]
  [current-events]
  [:div :ul#events :li]
  (h/clone-for [evt current-events]
               (h/html-content
                (html (record-html evt)))))


(h/defsnippet users-table "horizon/templates/users-table.html" [[:div]]
  [users]
  [:div :table#users :tbody :tr.row-template]
  (h/clone-for
   [user users]
   [:tr]                 (if (zero? (count (:apps user)))
                           (h/set-attr :class "inactive")
                           identity)
   [:td.user-email]      (h/content (:email user) (if (zero? (count (:apps user))) " (inactive)"))
   [:.user-registered]   (h/html-content (html
                                          (sortable-datetime-html
                                           (parse-sqlite-datetime
                                            (:created_at user)))))
   [:td.user-apps]       (h/content (str (count (:apps user))))))

(h/defsnippet apps-table "horizon/templates/apps-table.html" [[:div]]
  [users]
  [:div :table#app :tbody :tr.row-template]
  (h/clone-for
   [[app user] (deflate-users users)]
   [:td.titlefont :a]   (h/do->
                         (h/content (:name app))
                         (h/set-attr :href (first-url-of-app app)))
   [:td.user-email]     (h/content (:email user))
   [:td.app-framework]  (h/content (:framework app))
   [:td.app-memory]     (h/content (str (:memory app)))
   [:td.app-instances]  (h/content (str (:instances app)))
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
  (h/content (cloud-events-tab
              (reverse (sort-by :datetime @event/cloud-events-saved))))
  [:div#Apps_content]
  (h/content (apps-table users))
  [:div#Users_content]
  (h/content (users-table users))
  [:#horizon-release]
  (h/content (System/getProperty "horizon.version"))
  [:#cloud-mode]
  (h/content (cloud/describe-mode @cloud/mode)))

(defn main-view []
  (render-to-response (index (db/get-data))))

(defn events-websocket-handler
  [ch request]
  (siphon (map* #(encode-json->string {:type "hm-event" :value (str (html (hm-apps-html %)) "\n")})
                event/hm-events)
          ch)
  (siphon (map* #(encode-json->string {:type "cloud-event" :value (str (html (record-html %)) "\n")})
                event/cloud-events)
          ch))

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
  (let [port (Integer/parseInt (get (System/getenv) "PORT" "7654"))]
    (println (format "web: listening at http://localhost:%s/" port))
    (swap! server
           (fn [_] (start-http-server
                    (wrap-ring-handler
                     (-> app-routes
                         (wrap-reload '(horizon.web horizon.record))))
                    {:port port :websocket true})))))
