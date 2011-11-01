(ns horizon.cloud
  (use [horizon.util :only (run run-line-seq)]))

(def inside_micro
  {:name ::inside_micro})

(def outside_micro
  {:name ::outside_micro
   :host "stackato.local"})

(def sandbox
  {:name ::sandbox})

(defn args->mode
  "Return the appropriate cloud mode from the given arguments"
  [[modename & args]]
  (condp = (or modename "outside_micro")
    "sandbox"       sandbox
    "inside_micro"  inside_micro
    "outside_micro" (if args
                      (assoc outside_micro :host (first args))
                      outside_micro)))

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
     {:component "router"}    (remote-tail "tail -f /tmp/vcap-run/router.log")}))

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

(defmethod cloudcontroller-db ::outside_micro [{host :host}]
  (-> "tmp" (java.io.File.) .mkdirs)
  (let [local-db (format "tmp/%s-cc.db" host)]
    (do
      (println "Creating a local cache of sqlite db from" host "...")
      (println "(the local database therefore won't update unless you restart horizon)")
      (println "NOTE: if this hangs, then you may have forgot to copy your ssh pub key to the VM")
      (println (format "      run `ssh-copy-id stackato@%s` to do this." host))
      (scp "stackato" host (cloudcontroller-db inside_micro) local-db)
      (println "... done."))
    local-db))

(defmethod cloudcontroller-db ::sandbox [_]
  (println "Copying sandbox's CC sqlite db")
  (run "script/copy-sandbox-db")
  "tmp/sandbox-cc.db")