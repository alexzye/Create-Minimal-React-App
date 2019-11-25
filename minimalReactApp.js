// File: minimalReactApp.js
// Description: Setup npm package, create project directories and files, and install dependencies.

'use strict'

const fs = require('fs')
const cp = require('child_process')
const path = require('path');
const utils = require('./utils')

const [, , ...args] = process.argv
const projectName = args[0]

if (args.length < 1) {
  console.log('ERROR: missing project name argument')
  process.exit(1)
}


const devDependencies = {
  "@babel/core": "^7.5.5",
  "@babel/preset-env": "^7.5.5",
  "@babel/preset-react": "^7.0.0",
  "babel-loader": "^8.0.6"
}

// creates project
cp.exec(`mkdir -p ${projectName} && cd ${projectName} && npm init -y`,
  (initErr, initStdout, initStderr) => {
    if (initErr) {
      // todo: write more professional error messages
      console.error('you dun goofed')
      console.error('check permissions probably')
      return
    }

    console.log(initStdout)
    console.log(initStderr)

    var packageJSON = JSON.parse(fs.readFileSync(path.join(`${projectName}`, 'package.json')))
    packageJSON['devDependencies'] = devDependencies
    console.log(packageJSON)
    fs.writeFile(path.join(`${projectName}`, 'package.json'), JSON.stringify(packageJSON, null, 2), (err) => {
      if (err) {
        console.log('fuck')
      }
    })
  }
)

// copy src and base dirs to project directory
utils.copyDirectory('./assets/src', path.join(projectName, 'src'))
utils.copyDirectory('./assets/base', `${projectName}`)
utils.copyDirectory('./assets/public', path.join(projectName, 'public'))

// runs npm install on project install
cp.exec(`cd ${projectName} && npm install`,
  (initErr, initStdout, initStderr) => {
    if (initErr) {
      // todo: write more professional error messages
      console.error('you dun goofed')
      console.error('check permissions probably')
      return
    }

    console.log(initStdout)
    console.log(initStderr)
  }
)

