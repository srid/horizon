(ns horizon.cloud
  (use [clojure.string :only (split-lines)]
       [horizon.util :only (run run-line-seq)]))

(def micro
  {:name ::microcloud})

(def sandbox
  {:name ::sandbox})

(defmulti component-logs :name)

(defmethod component-logs ::microcloud [_]
  [[{:component "dea"}       #(run-line-seq "tail -f /tmp/vcap-run/dea.log")]
   [{:component "cc"}        #(run-line-seq "tail -f /tmp/vcap-run/cloud_controller.log")]
   [{:component "hm"}        #(run-line-seq "tail -f /tmp/vcap-run/health_manager.log")]
   [{:component "router"}    #(run-line-seq "tail -f /tmp/vcap-run/router.log")]
   ])

(defmethod component-logs ::sandbox [_]
  (apply merge
         (for [dea-host (split-lines (run "scripts/print-running-deas"))]
           {{:component "dea"
             :component-host dea-host} #(run-line-seq
                                         (str "scripts/tail-dea-log " dea-host))})))
