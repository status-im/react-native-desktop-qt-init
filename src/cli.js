'use strict';

const chalk = require('chalk');
const Common = require('./common');
const execSync = require('child_process').execSync;
const path = require('path');


const PACKAGE = "git+https://github.com/status-im/react-native-desktop-qt.git#v060";

const REACT_NATIVE_DESKTOP_GENERATE_PATH = function() {
  return path.resolve(
    process.cwd(),
    'node_modules',
    'react-native-desktop-qt',
    'local-cli',
    'generate-desktop.js'
  );
};


function installDesktopPackage() {
  let rndPackage = PACKAGE;

  console.log(`Installing ${rndPackage}...`);
  const pkgmgr = Common.isGlobalCliUsingYarn(process.cwd()) ? 'yarn add' : 'npm install --save';
  const execOptions = {}; // use {stdio: 'inherit'} for verbose
  execSync(`${pkgmgr} ${rndPackage}`, execOptions);
  console.log(chalk.green(`${rndPackage} successfully installed.`));
}

function runDesktopFilesGenerationScript() {

  const generateDesktop = require(REACT_NATIVE_DESKTOP_GENERATE_PATH());
  generateDesktop(process.cwd(), Common.getReactNativeAppName());
}


(async () => {

  try {
    installDesktopPackage();

    runDesktopFilesGenerationScript();
  } catch (error) {
    console.error(chalk.red(error.message));
    console.error(error);
    process.exit(1);
  }
})();
