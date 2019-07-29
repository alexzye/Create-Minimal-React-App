// File: minimalReactApp.js
// Description: Setup npm package, create project directories and files, and install dependencies.

'use strict'
const fs = require('fs')
const cp = require('child_process')

const [,, ...args] = process.argv

if (args.length < 3) {
    console.log('ERROR: missing project name argument')
    process.exit(1) 
}
const projectName = args[2]
fs.mkdirSync(projectName)

// updates process directory, all commands forward will be within project directory
process.chdir(projectName)
cp.execSync('npm init -y')
cp.execSync('mkdir public src dist')