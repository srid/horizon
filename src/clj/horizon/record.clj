(ns horizon.record
  (:use [clojure.data.json :only (read-json)]
        [clj-time.core :only (date-time)]
        [clj-time.format :only (unparse formatter)]
        [clansi]))

(def cf-log-prefix-re
  #"(\[.+\]) [^\s]+ \- \w+ \w+ \w+\s+\w+ \-\- ")

(defn- cf-pattern
  [pattern]
  (re-pattern (str cf-log-prefix-re pattern)))

(def dea-received-start-re
  (cf-pattern #"DEA received start message\: (.+)$"))

(def dea-instance-ready-re
  (cf-pattern #"Instance \(name=([^\s]+).+instance=(\w+).+is ready for connections, notifying system of status$"))

(def cc-sending-start-re
  (cf-pattern #"Sending start message (.+) to DEA (\w+)"))


(defn- parse-cf-datetime
  "Parse datetime format of CF logging"
  [time]
  (if time
    (apply date-time
           (->> time
                (re-matches #"\[(\d+)\-(\d+)\-(\d+) (\d+)\:(\d+)\:(\d+)\]")
                next
                (map #(Integer/parseInt %))))))


(defn parse-dea-start [l]
  (let [m (re-matcher dea-received-start-re l)]
    (when (.find m)
      (let [j (read-json (.group m 2))]
        {:event_type "dea_start"
         :datetime (parse-cf-datetime (.group m 1))
         :json j
         :users (:users j)
         :appname (:name j)}))))

(defn parse-dea-ready [l]
  (let [m (re-matcher dea-instance-ready-re l)]
    (when (.find m)
      {:event_type "dea_ready"
       :datetime (parse-cf-datetime (.group m 1))
       :appname (.group m 2)
       :container (.group m 3)})))

(defn parse-cc-start-app [l]
  (let [m (re-matcher cc-sending-start-re l)]
    (when (.find m)
      (let [j (read-json (.group m 2))]
        {:event_type "cc_start"
         :datetime (parse-cf-datetime (.group m 1))
         :json j
         :users (:users j)
         :appname (:name j)
         }))))

(defn parse-line [l]
  (or (parse-dea-start l)
      (parse-dea-ready l)
      (parse-cc-start-app l)))


(defn format-log-datetime [record]
  (unparse (formatter "MM-dd/hh:mm:ss") (:datetime record)))

(defn print-record
  "Print the log-record to terminal"
  [record]
  (let [record1 (dissoc record :event_type :json :component :datetime)]
    (println (format "%s %s -- %s"
                     (style (format-log-datetime record) :underline)
                     (style (:event_type record) :green)
                     record1))))

