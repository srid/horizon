# horizon

Horizon is the Stackato dashboard for reporting a) the state of the cloud and b) real-time operations statistics. The former presents data from the cloud controller's database, while the later does real-time processing of the log files just like [Heroku's pulse](http://lanyrd.com/2011/clojure-conj/shhfd/).

## Usage

```bash
$ lein deps
$ lein run  # also starts the web UI
```
    
## Development

Start CLJS watch in a second terminal:

```bash
# install cljs-watch: https://github.com/ibdknox/cljs-watch
git clone https://github.com/clojure/clojurescript.git ../clojurescript
cd ../clojurescript 
# Apply this patch to get closure trunk (for WebSockets)
# https://github.com/neotyk/clojurescript/commit/d8d51fec2cc61b41de0666d12a3d6b65da4063c0
script/bootstrap
cd ..
CLOJURESCRIPT_HOME=../clojurescript cljs-watch src/cljs
```
    
`M-x clojure-jack-in` and eval:

```clj
(horizon.sink/initialize)
(horizon.event/initialize)
(horizon.web/initialize)
```

## Architecture

TODO

## Research

* Lamina and Aleph
* [Storm](https://github.com/nathanmarz/storm) - Distributed and fault-tolerant realtime computation

## License

Copyright (C) 2011 ActiveState

