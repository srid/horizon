(ns horizon.cloud
  (use [clojure.string :only (split-lines)]
       [horizon.util :only (run run-line-seq)]))

(def inside_micro
  {:name ::inside_micro})

(def outside_micro
  {:name ::outside_micro
   :host "stackato.local"})

(def sandbox
  {:name ::sandbox})

(def envconfig
  (let [selected (get (System/getenv) "HORIZON_CLOUD" "outside_micro")]
    (condp = selected
      "sandbox"       sandbox
      "inside_micro"  inside_micro
      "outside_micro" outside_micro)))

(defmulti component-logs :name)

(defmethod component-logs ::inside_micro [_]
  {{:component "dea"}       #(run-line-seq "tail -n 50 -f /tmp/vcap-run/dea.log")
   {:component "cc"}        #(run-line-seq "tail -f /tmp/vcap-run/cloud_controller.log")
   {:component "hm"}        #(run-line-seq "tail -f /tmp/vcap-run/health_manager.log")
   {:component "router"}    #(run-line-seq "tail -f /tmp/vcap-run/router.log")})

(defmethod component-logs ::outside_micro [{host :host}]
  (letfn [(remote-tail [tailcmd]
            #(run-line-seq (format "ssh stackato@%s %s" host tailcmd)))]
    {{:component "dea"}       (remote-tail "tail -n 200 -f /tmp/vcap-run/dea.log")
     {:component "cc"}        (remote-tail "tail -n 200 -f /tmp/vcap-run/cloud_controller.log")
     {:component "hm"}        (remote-tail "tail -f /tmp/vcap-run/health_manager.log")
     {:component "router"}    (remote-tail "tail -f /tmp/vcap-run/router.log")}))

(defmethod component-logs ::sandbox [_]
  (apply merge
         (for [dea-host (split-lines (run "scripts/print-running-deas"))]
           {{:component "dea"
             :component-host dea-host} #(run-line-seq
                                         (str "scripts/tail-dea-log " dea-host))})))

(defmulti cloudcontroller-db :name)

(defmethod cloudcontroller-db ::inside_micro [_]
  "/home/stackato/stackato/vcap/cloud_controller/db/cloudcontroller.sqlite3")

(defn- scp [user host remote-file local-file]
  "copies a remote file using scp"
  (run "scp" "-o" "UserKnownHostsFile=/dev/null" "-o" "StrictHostKeyChecking=no"
       (format "%s@%s:%s" user host remote-file)
       local-file))

(defmethod cloudcontroller-db ::outside_micro [{host :host}]
  (let [local-db (format "tmp/%s-cc.db" host)]
    (println "Creating a local cache of sqlite db from" host "...")
    (println "(the local database therefore won't update unless you restart horizon)")
    ;; TODO - use expect to automate this? VM's default password is known.
    (println "NOTE: if this hangs, then you may have forgot to copy your ssh pub key to the VM")
    (println (format "      run `ssh-copy-id stackato@%s` to do this." host))
    (scp "stackato" host (cloudcontroller-db inside_micro) local-db)
    (println "... done.")
    local-db))

(defmethod cloudcontroller-db ::sandbox [_]
  ;; locally copied by scripts/copy-sandbox-db
  "cloudcontroller.sqlite3")