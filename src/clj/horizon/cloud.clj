(ns horizon.cloud
  (use [horizon.util :only (run run-line-seq)]))

(def inside_micro
  {:name ::inside_micro})

(def outside_micro
  {:name ::outside_micro
   :host "stackato.local"})

(def sandbox
  {:name ::sandbox})

(defonce mode (atom outside_micro))

(defn set-mode!
  "Return the appropriate cloud mode from the given arguments"
  [[modename & args]]
  (swap! mode (fn [_] (condp = (or modename "outside_micro")
                        "sandbox"       sandbox
                        "inside_micro"  inside_micro
                        "outside_micro" (if args
                                          (assoc outside_micro :host (first args))
                                          outside_micro)))))

(defmulti describe-mode :name)

(defmethod describe-mode ::inside_micro [_]
  "micro cloud")

(defmethod describe-mode ::outside_micro [m]
  (format "micro cloud - %s" (:host m)))

(defmethod describe-mode ::sandbox [_]
  (format "sandbox"))

(defmulti component-logs :name)

(defmethod component-logs ::inside_micro [_]
  {{:component "dea"}       #(run-line-seq "tail -n 200 -f /tmp/vcap-run/dea.log")
   {:component "cc"}        #(run-line-seq "tail -n 200 -f /tmp/vcap-run/cloud_controller.log")
   {:component "hm"}        #(run-line-seq "tail -f /tmp/vcap-run/health_manager.log")
   {:component "router"}    #(run-line-seq "tail -f /tmp/vcap-run/router.log")})

(defmethod component-logs ::outside_micro [{host :host}]
  (letfn [(remote-tail [tailcmd]
            #(run-line-seq (format "ssh stackato@%s %s" host tailcmd)))]
    {{:component "dea"}       (remote-tail "tail -n 200 -f /tmp/vcap-run/dea.log")
     {:component "cc"}        (remote-tail "tail -n 200 -f /tmp/vcap-run/cloud_controller.log")
     {:component "mongodb"}   (remote-tail "tail -n 200 -f /tmp/vcap-run/mongodb_gateway.log")
     {:component "hm"}        (remote-tail "tail -f /tmp/vcap-run/health_manager.log")
     {:component "router"}    (remote-tail "tail -f /tmp/vcap-run/router.log")
     {:component "monit"}     (remote-tail "tail -n 200 -f /var/log/monit.log")}))

(defmethod component-logs ::sandbox [_]
  (let [host "sandbox.activestate.com"]
    (apply merge
         (for [dea-host (clojure.string/split-lines (run "script/print-running-deas"))]
           {{:component "dea"
             :component-host dea-host} #(run-line-seq
                                         (str "script/tail-dea-log " dea-host))
             {:component "cc"
              :component-host host} #(run-line-seq
                                      "script/tail-other-log cloud_controller")
              {:component "hm"
               :component-host host} #(run-line-seq
                                       "script/tail-other-log health_manager")}))))

(defmulti cloudcontroller-db :name)

(defmethod cloudcontroller-db ::inside_micro [_]
  "/home/stackato/stackato/vcap/cloud_controller/db/cloudcontroller.sqlite3")

(defn- scp [user host remote-file local-file]
  "copies a remote file using scp"
  (run "scp" "-o" "UserKnownHostsFile=/dev/null" "-o" "StrictHostKeyChecking=no"
       (format "%s@%s:%s" user host remote-file)
       local-file))

(defn do-now-and-schedule-repeatedly
  "Call f once, and then again every interval seconds in a thread"
  [f interval]
  (f)
  (future
    (loop []
      (Thread/sleep (* 1000 interval))
      (f)
      (recur))))

(defmethod cloudcontroller-db ::outside_micro [{host :host}]
  (-> "tmp" (java.io.File.) .mkdirs)
  (let [local-db (format "tmp/%s-cc.db" host)]
    (println "Creating a local cache of sqlite db from" host "...")
    (println "(the local database will be updated every 5 minutes)")
    (println "NOTE: if this hangs, then you may have forgot to copy your ssh pub key to the VM")
    (println (format "      run `ssh-copy-id stackato@%s` to do this." host))
    (do-now-and-schedule-repeatedly
     #(do
        (println (format "Copying %s's CC sqlite db" host))
        (scp "stackato" host (cloudcontroller-db inside_micro) local-db))
     (* 60 5))
    local-db))

; XXX: This function must be called only once.
(defmethod cloudcontroller-db ::sandbox [_]
  (do-now-and-schedule-repeatedly
   #(do
      (println "Copying sandbox's CC sqlite db")
      (run "script/copy-sandbox-db"))
   (* 60 5))
  "tmp/sandbox-cc.db")