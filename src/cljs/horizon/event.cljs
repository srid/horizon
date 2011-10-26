(ns horizon.event
  (:require [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [horizon.logger :as log]
            [horizon.websocket :as socket]
            [horizon.ui :as ui]))

;; WebSocket handlers
(defn- websocket-opened [soc]
  (fn [event]
    (log/info "websocket" (str "WebSocket opened: " event))))

(defn- websocket-message [msg]
  (let [msg (JSON/parse msg)]
    (log/info "event" (str "Received message from server: " (.type msg)))
    (condp = (.type msg)
      "cloud-event"
      (let [events    (dom/getElement "events")
          event-ele (dom/createDom "li" nil (dom/htmlToDocumentFragment (.value msg)))]
      (ui/prependChild events event-ele)

      ;; Highlight the tab on new activity
      (ui/tabbar-flash "Cloud events")

      ;; FIXME: this doesn't work
      (.play (new goog.fx.dom/FadeOutAndHide event-ele 3000)))

      "hm-event"
      (set! (.innerHTML (dom/getElement "hm-apps")) (.value msg)))))

(defn- websocket-error [event]
  (log/info "websocket" (str "WebSocket error: " event)))

(defn- websocket-closed [event]
  (log/info "websocket" (str "WebSocket closed: " event)))

(defn ^:export init []
  (log/init "log")
  (log/info "event" "Initializing events websocket")
  (let [socket (socket/create)]
    (if-let [socket (-> socket
                        (socket/configure (websocket-opened socket)
                                          websocket-message
                                          websocket-error
                                          websocket-closed)
                        (socket/connect! (js* "'ws://' + document.location.host + '/socket'")))]
      (log/info "event" "Socket opened!")
      (log/info "event" "Socket FAIL"))))