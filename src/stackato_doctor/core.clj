(ns stackato-doctor.core
  (:use [clojure.contrib.duck-streams :only (read-lines)]
        [clojure.contrib.json :only (read-json)]
        [clojure.contrib.cond :only (cond-let)]
        [clj-time.core :only (date-time)]
        [clj-time.format :only (unparse formatter)])
  (:require [stackato-doctor.logmerge :as logmerge]))


(defn parse-log-datetime
  "Parse datetime format of CF logging"
  [time]
  (if time
    (apply date-time
           (->> time
                (re-matches #"\[(\d+)\-(\d+)\-(\d+) (\d+)\:(\d+)\:(\d+)\]")
                next
                (map #(Integer/parseInt %))))))

(def ^{:private true} log-record-types
  {;; Beginning of DEA app start
   :received-start-message
   [#"^DEA received start message\: (.+)$"
    (fn [[json-data]]
      (let [j (read-json json-data)]
        {:json j, :users (:users j), :appname (:name j)}))]

   ;; Earlier know time of container ID
   :grabbed-container
   [#"^Grabbed container dir .+ for instance (\w+)$"
    [:container]],

   ;; App is now ready for connections
   :instance-ready-for-connections
   [#"^Instance \(name=(\w+).+instance=(\w+).+is ready for connections, notifying system of status$"
   [:appname :container]],
   })

(defn- match-record-type
  "Match the given record to one of defined types and return its extra metadata."
  [record]
  (loop [[[key [pattern meta]] & more :as coll] (seq log-record-types)]
    (when-not (empty? coll)
      (if-let [groups (next (re-find pattern (:message record "")))]
        (merge {:type key} (if (coll? meta) (zipmap meta groups) (meta groups)))
        (recur more)))))
  
(defn parse-log-record
  "Parse a Cf log record. Return a map."
  [line]
  (let [pattern #"(\[.+\]) ([^\s]+) \- (\w+ \w+ \w+)\s+(\w+) \-\- (.+)"
        keys    [:when :component :identifier :level :message]
        record  (zipmap keys (next (re-matches pattern line)))
        record  (assoc record :type nil :when (parse-log-datetime (:when record)))]
    (merge record (match-record-type record))))

(defn events-timeline
  "Return special log records"
  [records]
  (filter #(not (nil? (:type %))) records))

(defn play
  []
  (let [line "[2011-09-15 11:28:58] dea - 1259 05ed 7573   INFO -- Max Memory set to 4.0G"]
    (println (parse-log-record line))))

(defn -main
  []
  (logmerge/initialize)
  (loop [[host record] (logmerge/next-log-record)]
    (let [record          (parse-log-record record)
          evt-to-display  (dissoc record :type :message :foo :json :level :component :when)
          time-to-display (unparse (formatter "MM-dd/hh:mm:ss") (:when record))]
      (println (format "[%.15s] %s %.15s -- %s"
                       host
                       time-to-display
                       (:type record)
                       (if (nil? (:type record)) (:message record) evt-to-display))))
    (recur (logmerge/next-log-record))))
