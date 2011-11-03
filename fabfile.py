from glob import glob
from fabric.api import run, local, env, put

env.hosts = ['stackato@stackato.activestate.com']

def _uberjar():
    local('rm -f *.jar')
    local('lein uberjar')

def deploy_staging():
    _uberjar()
    run('rm -f stackato/horizon/*.jar')
    put(glob('horizon-*-standalone.jar')[0], 'stackato/horizon/')
    run('stackato-admin start dashboard')
