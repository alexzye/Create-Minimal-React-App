// File: minimalReactApp.js
// Description: Setup npm package, create project directories and files, and install dependencies.

'use strict'
const fs = require('fs')
const cp = require('child_process')
const path = require('path');
const utils = require('./utils')

const [,, ...args] = process.argv
const projectName = args[0]

if (args.length < 1) {
    console.log('ERROR: missing project name argument')
    process.exit(1) 
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
  }
)

// copy src and base dirs to project directory
utils.copyDirectory('./assets/src', `${projectName}/src`)
utils.copyDirectory('./assets/base', `${projectName}`)

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
