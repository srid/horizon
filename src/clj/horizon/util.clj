(ns horizon.util
  (use [clojure.java.shell :only (sh)]
       [clojure.string :only (split-lines)]))

(defn run
  "Run cmd and return stdout only"
  [cmd]
  ((sh cmd :return-map true) :out))

(defn run-line-seq
  "Run cmd and return a seq of stdout lines"
  [cmd]
  (->> (.exec (Runtime/getRuntime) cmd)
       .getInputStream
       clojure.java.io/reader
       line-seq))
