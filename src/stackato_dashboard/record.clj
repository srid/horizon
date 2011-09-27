(ns stackato-dashboard.record
  (:use [clojure.contrib.duck-streams :only (read-lines)]
        [clojure.contrib.json :only (read-json)]
        [clojure.contrib.cond :only (cond-let)]
        [clj-time.core :only (date-time)]
        [clj-time.format :only (unparse formatter)]
        [clansi]))

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

(defn format-log-datetime [record]
  (unparse (formatter "MM-dd/hh:mm:ss") (:when record)))

(defn print-log-record
  "Print the log-record to terminal"
  [record host]
  (let [record1         (dissoc record :type :message :foo :json :level :component :when)
        time-to-display (format-log-datetime record)]
    (println (format "[%.15s] %s %s -- %s"
                     host
                     (style time-to-display :underline)
                     (style (:type record) :green)
                     (if (nil? (:type record)) (:message record) record1)))))

(defn events-timeline
  "Return special log records"
  [records]
  (filter #(not (nil? (:type %))) records))
