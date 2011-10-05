# horizon

Horizon is the Stackato dashboard for reporting a) the state of the cloud and b) real-time operations statistics. The former presents data from the cloud controller's database, while the later does real-time processing of the log files just like [Heroku's pulse](http://lanyrd.com/2011/clojure-conj/shhfd/).

## Usage

```bash
$ lein deps
$ # Compiled cljs scripts (see 'Development' below)
$ lein run  # also starts the web UI
```
    
## Development

Start CLJS watch in a second terminal:

```
# install cljs-watch: https://github.com/ibdknox/cljs-watch
git clone https://github.com/clojure/clojurescript.git ../clojurescript
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

