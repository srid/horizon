(ns stackato-doctor.ec2
  (use [clojure.contrib.shell-out :only (sh)]
       [clojure.contrib.string :only (split-lines)]))

(defn dea-hostnames
  "Return the hostname of running DEA"
  []
  (split-lines (sh "scripts/print-running-deas")))
