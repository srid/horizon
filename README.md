# horizon

Horizon is the Stackato dashboard for reporting a) the state of the cloud and b) real-time operations statistics. The former presents data from the cloud controller's database, while the later does real-time processing of the log files just like [Heroku's pulse](http://lanyrd.com/2011/clojure-conj/shhfd/).

![horizon architecture](http://dl.dropbox.com/u/87045/permalinks/horizon-arch.png)

## Quick start

Get a micro cloud VM running at `stackato.local` and then:

```bash
$ ssh-copy-id stackato@stackato.local  # one-time
$ scripts/bootstrap # one-time
$ scripts/watch # leave this running on a different terminal if you are changing sass/cljs
$ lein run
```

Open http://localhost:8000/ and deploy some apps to your micro cloud.

## Running horizon

```bash
$ scripts/bootstrap
$ HORIZON_CLOUD=<mode> lein run
```

where `<mode>` can be one of:

* `sandbox` -- runs Horizon against [the sandbox](http://sandbox.activestate.com/) (requries ec2 files -- see below).
* `inside_micro` -- assuming Horizon is run from *within* a micro cloud VM
* `outside_micro` -- runs Horizon against a micro cloud VM (`stackato.local`) running on your host

The default is `outside_micro`.

For sandbox mode:

1. Get ~/.ec2 and ~/Downloads/ec2-??? (asksrid)
2. Run `scripts/copy-sandbox-db` get sandbox db
    
## Development mode

``lein run`` is not most suited for development if you are going to
edit/recompile the modules. 

```bash
$ scripts/boostrap
$ scripts/watch  # leave this running on a second terminal
```

The watch script watches and compiles sass and cljs files to css and
js.

Open `src/clj/horizon/core.clj` in Emacs, `M-x clojure-jack-in`, `C-c
C-k` the core.clj buffer and then eval the following in REPL:

```clj
(horizon.core/initialize)  ;; equivalent to `lein run`
```

## Deployment

```bash
lein uberjar
[...]
java -jar horizon-1.0.0-SNAPSHOT-standalone.jar
[...]
```

## Research

* Lamina and Aleph
* [Storm](https://github.com/nathanmarz/storm) - Distributed and fault-tolerant realtime computation

## License

Copyright (C) 2011 ActiveState

