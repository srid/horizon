# stackato-dashboard

Stackato dashboard for reporting a) the state of the cloud and b) real-time operations statistics. The former presents data from the cloud controller's database, while the later does real-time processing of the log files just like [Heroku's pulse](http://github.com/heroku/pulse).

## Usage

    $ lein deps
    $ lein run  # also starts the web UI

## Architecture

TODO

## Research

* Lamina and Aleph
* [Storm](https://github.com/nathanmarz/storm) - Distributed and fault-tolerant realtime computation
* Beanstalk fork (based on Lamina and Aleph) - https://github.com/sunng87/clojalk

## License

Copyright (C) 2011 ActiveState

