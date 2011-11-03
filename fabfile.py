from time import sleep
from glob import glob
from urllib2 import urlopen, URLError
from fabric.api import run, local, env, put
from fabric.colors import *
env.hosts = ['stackato@stackato.activestate.com']

def _uberjar():
    local('rm -f *.jar')
    local('lein uberjar')

def deploy_staging():
    "Deploy dashboard to stackato.activestate.com"
    #_uberjar()
    run('rm -f stackato/horizon/*.jar')
    run('stackato-admin stop dashboard')
    run('rm -f /tmp/vcap-run/horizon.log')
    put(glob('horizon-*-standalone.jar')[0], 'stackato/horizon/')
    run('stackato-admin start dashboard')
    check_staging()
    

def check_staging():
    url = "http://stackato.activestate.com:7654/"
    print("Checking %s" % url)
    while True:
        try:
            f = urlopen(url)
        except URLError, e:
            print(red('FAIL - %s' % e))
        else:
            if f.code == 200:
                print(green('OK'))
            else:
                print(red('Server returned unexpected HTTP code: %s' % f.code))
            break
        sleep(2)
