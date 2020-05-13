# react-native-desktop-qt-init
CLI to bootstrap the addition of desktop-qt platform to existing react-native project

## Usage with `react-native`>0.59

```
//create project
npx react-native init MyProject --version 0.60.6
cd MyProject

//Add desktop support.
npx https://github.com/status-im/react-native-desktop-qt-init.git

//Now `run-desktop` command available
npx react-native run-desktop
```

When invoked `react-native-desktop-qt-init` installs `react-native-desktop-qt` package to your project and calls it to generate desktop project files.
