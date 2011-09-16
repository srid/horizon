(ns stackato-doctor.core
  (:use [clojure.contrib.duck-streams :only (read-lines)]
        [clojure.contrib.json :only (read-json)]
        [clojure.contrib.cond :only (cond-let)]
        [clj-time.core :only (date-time)]
        [clj-time.format :only (unparse formatter)]))

(defn parse-log-datetime
  [dt]
  (if dt
    (apply date-time
           (map #(Integer/parseInt %)
                (next
                 (re-matches
                  #"\[(\d+)\-(\d+)\-(\d+) (\d+)\:(\d+)\:(\d+)\]" dt))))))

(defn parse-log-line
  "Returns a map for a line in the log."
  [line]
  (let [pattern #"(\[.+\]) ([^\s]+) \- (\w+ \w+ \w+)\s+(\w+) \-\- (.+)"
        keys    [:when :component :foo :level :message]
        record  (zipmap keys (next (re-matches pattern line)))
        record  (assoc record :when (parse-log-datetime (:when record)))]
    (loop [[typ & types]
           [(fn [record]
              ;; Earliest point in time when we know the container id
              (if-let [m (next (re-find #"^Grabbed container (\w+).+$"
                                        (:message record "")))]
                {:type :grabbed-container :container (first m)}))

            ;; End of container creation
            (fn [record]
              (if-let [m (re-find #"^Instance.+is ready for connections, notifying system of status$"
                                  (:message record ""))]
                {:type :instance-ready-for-connections}))

            ;; Beginning of container creation
            (fn [record]
              (if-let [[_ jsonm] (re-find #"^DEA received start message\: (.+)$"
                                          (:message record ""))]
                {:type :received-start-message
                 :json (read-json jsonm)}))]]
      (if-not typ
        (assoc record :type nil) ;; unknown record
        (if-let [attr (typ record)]
          (merge record attr)
          (recur types))))))

(defn read-dea-records
  []
  (map parse-log-line (read-lines "data/dea.log")))

(defn events-timeline
  [records]
  (filter #(not (nil? (:type %))) records))

(defn process
  []
  (let [records            (read-dea-records)
        events             (events-timeline records)]
    (println "Read records: " (count records))
    (println "Special events: ")
    (doseq [evt events]
      (let [evt-to-display  (dissoc evt :type :message :foo :json :level :component :when)
            time-to-display (unparse (formatter "MM-dd/hh:mm") (:time evt))]
        (println (format "%s %.15s -- %s" time-to-display (:type evt) evt-to-display)))))) 
    

(defn play
  []
  (let [line "[2011-09-15 11:28:58] dea - 1259 05ed 7573   INFO -- Max Memory set to 4.0G"]
    (println (parse-log-line line))))
