# horizon

Horizon is the Stackato dashboard for reporting a) the state of the cloud and b) real-time operations statistics. The former presents data from the cloud controller's database, while the later does real-time processing of the log files just like [Heroku's pulse](http://lanyrd.com/2011/clojure-conj/shhfd/).

![horizon architecture](http://dl.dropbox.com/u/87045/permalinks/horizon-arch.png)

## Getting Started

```bash
$ scripts/bootstrap
$ lein run  # also starts the web UI
```
    
## Development mode

``lein run`` is not most suited for development if you are going to
edit/recompile the modules. 

``bash
$ scripts/boostrap
$ scripts/watch  # leave this running in other terminal

Open `src/clj/horizon/core.clj` in Emacs, `M-x clojure-jack-in`, `C-c
C-k` the core.clj buffer and then eval the following in REPL:

```clj
(horizon.core/initialize)  ;; equivalent to `lein run`
```

## Architecture

TODO

## Research

* Lamina and Aleph
* [Storm](https://github.com/nathanmarz/storm) - Distributed and fault-tolerant realtime computation

## License

Copyright (C) 2011 ActiveState

