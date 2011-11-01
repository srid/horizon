# A script to simulate app deployment in sandbox.activestate.com:
#   Deploys a sample app under different names every 5 minutes.
# Setup:
# 1. git clone the samples repo to ~/as/stackato-samples
# 2. install the stackato client

import os
import string
import random
import subprocess
import json
import time

def read_simple_words():
    for word in open('/usr/share/dict/words').readlines():
        word = word.strip()
        if word and all([c in string.letters for c in word]):
            yield word

def random_appname():
    words = list(read_simple_words())
    return random.choice(words) + '-' + random.choice(words)

def run(cmd):
    subprocess.check_call(cmd, shell=True)

def run_cat(cmd):
    return subprocess.check_output(cmd, shell=True)

def list_apps():
    return [app['name'] for app in json.loads(run_cat('stackato list --json'))]

def delete_some_apps():
    for app in list_apps()[:2]:
        run('stackato delete -n %s' % app)

def push_an_app():
    delete_some_apps()  # sandbox has 2 apps limitation
    run('stackato push %s -n' % random_appname())

def run_every(seconds, function, *args):
    while True:
        function(*args)
        print('** Sleeping for %d seconds' % seconds)
        try:
            time.sleep(seconds)
        except KeyboardInterrupt:
            print('** exiting')
            raise SystemExit(2)

def main():
    os.chdir(os.path.expanduser('~/as/stackato-samples/node/node-env'))
    run('stackato target api.stackato.activestate.com')
    run_every(60*15, push_an_app)


if __name__ == '__main__':
    main()

