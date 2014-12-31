#!/usr/bin/env node
var spawn = require('child_process').spawn;
var npm = require('npm');
var fs = require('fs');

npm.load(function(err) {
  if (err) {
    throw err;
  }

  var current = npm.config.get('ssl.current');

  var profileKey = 'ssl.profiles.' + current;

  var registry = npm.config.get(profileKey + '.registry');
  var cafile = npm.config.get(profileKey + '.cafile');
  var keyfile = npm.config.get(profileKey + '.keyfile');
  var certfile = npm.config.get(profileKey + '.certfile');

  var key = fs.readFileSync(keyfile, { encoding: 'utf-8' });
  var cert = fs.readFileSync(certfile, { encoding: 'utf-8' });
  
  var argv = process.argv.slice(2);
  var env = process.env;

  env.npm_config_registry = registry;
  env.npm_config_cafile = cafile;
  env.npm_config_key = key;
  env.npm_config_cert = cert;
  
  spawn('npm', argv, {
    env: env,
    stdio: 'inherit',
  });
});
