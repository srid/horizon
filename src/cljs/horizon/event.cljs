(ns horizon.event
  (:require [goog.dom :as dom]
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
  (log/info "event" (str "Received message: " msg))
  (let [event-ele (dom/createDom "li" nil (dom/htmlToDocumentFragment msg))]
    (prependChild (dom/getElement "events") event-ele)))

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