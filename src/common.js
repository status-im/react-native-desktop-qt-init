
'use strict';

const fs = require('fs');
const path = require('path');


const isGlobalCliUsingYarn = function(projectDir) {
  return fs.existsSync(path.join(projectDir, 'yarn.lock'));
};


const getReactNativeAppName = function () {
  console.log('Reading application name from package.json...');
  let name = JSON.parse(fs.readFileSync('package.json', 'utf8')).name;
  if (!name) {
    if (fs.existsSync('app.json')) {
      console.log('Reading application name from app.json...');
      name = JSON.parse(fs.readFileSync('app.json', 'utf8')).name;
    }
  }
  if (!name) {
    console.error('Please specify name in package.json or app.json');
  }
  return name;
};

module.exports = {
  isGlobalCliUsingYarn,
  getReactNativeAppName,
};
