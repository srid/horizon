(ns horizon.record
  (:use [clojure.data.json :only (read-json)]
        [clj-time.core :only (date-time)]
        [clj-time.format :only (unparse formatter)]
        [clansi]))

(def cf-log-prefix-re
  #"(\[.+\]) [^\s]+ \- \w+ \w+ \w+\s+\w+ \-\- ")

;; certain components (services) have different logging format
(def cf-service-log-prefix-re
  #"., (\[.+) \#\d+\] [^\s]+ \-\- \: ")

(defn- cf-pattern
  [pattern]
  (re-pattern (str cf-log-prefix-re pattern)))

(defn- cf-service-pattern
  [pattern]
  (re-pattern (str cf-service-log-prefix-re pattern)))

(def dea-received-start-re
  (cf-pattern #"DEA received start message\: (.+)$"))

(def dea-instance-ready-re
  (cf-pattern #"Instance \(name=([^\s]+).+instance=(\w+).+is ready for connections, notifying system of status$"))

(def cc-sending-start-re
  (cf-pattern #"Sending start message (.+) to DEA (\w+)"))

(def mongodb-provision-attempt-re
  (cf-service-pattern #".+ Attempting to provision instance \(label=([^,]+).+"))

(defn- parse-datetime
  "Parse datetime format of CF logging"
  [time format]
  (if time
    (apply date-time
           (->> time
                (re-matches format)
                next
                (map #(Integer/parseInt %))))))

(defn- parse-cf-datetime
  "Parse datetime format of CF logging"
  [time]
  (parse-datetime time
                  #"\[(\d+)\-(\d+)\-(\d+) (\d+)\:(\d+)\:(\d+)\]"))

(defn- parse-cf-service-datetime
  "Parse the second datetime format of CF logging"
  [time]
  (parse-datetime time
                  #"\[(\d+)\-(\d+)\-(\d+)T(\d+)\:(\d+)\:(\d+)\..+"))


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

(defn parse-mongo-provision-attempt [l]
  (let [m (re-matcher mongodb-provision-attempt-re l)]
    (when (.find m)
      {:event_type "mongo_provision"
       :datetime (parse-cf-service-datetime (.group m 1))
       :service-label (.group m 2)})))


(defn parse-line [l]
  (or (parse-dea-start l)
      (parse-dea-ready l)
      (parse-cc-start-app l)
      (parse-mongo-provision-attempt l)))


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
