(ns horizon.event
  (:require [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [horizon.logger :as log]
            [horizon.websocket :as socket]))

;; WebSocket handlers
(defn websocket-opened [soc]
  (fn [event]
    (log/info "websocket" (str "WebSocket opened: " event))))

(defn prependChild
  [parent node]
  (dom/insertSiblingBefore node (dom/getFirstElementChild parent)))

(defn websocket-message [msg]
  (log/info "event" "Received message from server")
  (let [events    (dom/getElement "events")
        event-ele (dom/createDom "li" nil (dom/htmlToDocumentFragment msg))]
    (prependChild events event-ele)
    (classes/add (dom/getElement "Cloud events") "goog-tab-newactivity")
    (.play (new goog.fx.dom/FadeOutAndHide event-ele 3000))))

(defn websocket-error [event]
  (log/info "websocket" (str "WebSocket error: " event)))

(defn websocket-closed [event]
  (log/info "websocket" (str "WebSocket closed: " event)))


(defn init []
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