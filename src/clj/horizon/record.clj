(ns horizon.record
  (:use [clojure.data.json :only (read-json)]
        [clj-time.core :only (date-time now)]
        [clj-time.format :only (parse unparse formatter)]
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

(def dea-received-stop-re
  (cf-pattern #"Stopping instance \(name=([^\s]+).+instance=(\w+) index=(\d+)\)$"))

(def dea-resource-limit-reached-re
  (cf-pattern #"Ignoring request, not enough resources."))

(def cc-sending-start-re
  (cf-pattern #"Sending start message (.+) to DEA (\w+)"))

(def cc-no-resources-available-re
  (cf-pattern #"No resources available to start instance"))

(def hm-analyzed-apps-re
  (cf-pattern #"Analyzed (\d+) running and (\d+) down apps .*$"))

(def mongodb-provision-attempt-re
  (cf-service-pattern #".+ Attempting to provision instance \(label=([^,]+).+"))

(def mongodb-provisioned-re
  (cf-service-pattern #"Successfully provision response\:(.+)"))

(def monit-re
  ; TODO - remove PDT hardcoding
  #"\[PDT (.+)\].+\: \'(.+)' process PID changed to (\d+)")

(defn parse-datetime
  "Parse time according to format"
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

(defn parse-dea-stop [l]
  (let [m (re-matcher dea-received-stop-re l)]
    (when (.find m)
      {:event_type "dea_stop"
       :datetime (parse-cf-datetime (.group m 1))
       :appname (.group m 2)
       :container (.group m 3)
       :instance (.group m 4)})))

(defn parse-dea-resource-limit-reached [l]
  (let [m (re-matcher dea-resource-limit-reached-re l)]
    (when (.find m)
      {:event_type "dea_resource_limit_reached"
       :datetime (parse-cf-datetime (.group m 1))})))

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

(defn parse-cc-no-resources-available [l]
  (let [m (re-matcher cc-no-resources-available-re l)]
    (when (.find m)
      {:event_type "cc_no_rsrc"
       :datetime (parse-cf-datetime (.group m 1))})))

(defn parse-hm-analyzed-apps [l]
  (let [m (re-matcher hm-analyzed-apps-re l)]
    (when (.find m)
      {:event_type "hm_analyzed"
       :datetime (parse-cf-datetime (.group m 1))
       :running (Integer/parseInt (.group m 2))
       :down (Integer/parseInt (.group m 3))})))

(defn parse-mongo-provision-attempt [l]
  (let [m (re-matcher mongodb-provision-attempt-re l)]
    (when (.find m)
      {:event_type "mongo_provision"
       :datetime (parse-cf-service-datetime (.group m 1))
       :service-label (.group m 2)})))

(defn parse-mongo-provisioned [l]
  (let [m (re-matcher mongodb-provisioned-re l)]
    (when (.find m)
      (let [cred-ruby-hash (.group m 2)]
        {:event_type "mongo_provisioned"
         :datetime (parse-cf-service-datetime (.group m 1))
         :cred cred-ruby-hash}))))

(defn parse-monit-log-datetime [s]
  ;; add the missing year element
  (let [thisyear (.getYear (now))
        s        (format "%s %s" thisyear s)
        fmt      "yyyy MMM dd HH:mm:ss"]
    (parse (formatter fmt) s)))

(defn parse-monit-message [l]
  (let [m (re-matcher monit-re l)]
    (when (.find m)
      {:event_type "monit_message"
       :datetime (parse-monit-log-datetime (.group m 1))
       :process (.group m 2)
       :newpid    (Integer. (.group m 3))})))

(defn parse-line [l]
  (some #(% l)
        [parse-dea-start parse-dea-ready parse-dea-stop
         parse-dea-resource-limit-reached
         parse-cc-start-app
         parse-cc-no-resources-available
         parse-hm-analyzed-apps
         parse-mongo-provision-attempt
         parse-mongo-provisioned
         parse-monit-message]))


(defn format-log-datetime [record]
  (unparse (formatter "yyyy-MM-dd hh:mm:ss") (:datetime record)))

(defn print-record
  "Print the log-record to terminal"
  [record]
  (let [record1 (dissoc record :event_type :json :component :datetime)]
    (println (format "%s %s -- %s"
                     (style (format-log-datetime record) :underline)
                     (style (:event_type record) :green)
                     record1))))
