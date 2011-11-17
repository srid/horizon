from time import sleep
from glob import glob
from urllib2 import urlopen, URLError
from fabric.api import run, local, env, put
from fabric.colors import *
# env.hosts = ['stackato@stackato.activestate.com']

def release():
    local('rm -f horizon-*')
    local('lein bin')
    
def deploy_staging():
    "Deploy dashboard to stackato.activestate.com"
    run('rm -f stackato/horizon/horizon-*')
    run('stackato-admin stop dashboard')
    run('rm -f /tmp/vcap-run/horizon.log')
    local('rm -f horizon-*.jar')
    put(glob('horizon-*')[0], 'stackato/horizon/')
    run('chmod +x ~/stackato/horizon/horizon-*')
    run('stackato-admin start dashboard')
    check_staging()
    
def check_staging():
    host = env.hosts[0].split('@')[1]
    url = "http://%s:7654/" % host
    print("Checking %s" % url)
    while True:
        try:
            f = urlopen(url)
        except URLError, e:
            print(red('FAIL - %s' % e))
            run('tail -n 5 /tmp/vcap-run/horizon.log || true')
        else:
            if f.code == 200:
                print(green('OK'))
            else:
                print(red('Server returned unexpected HTTP code: %s' % f.code))
            break
        sleep(2)
