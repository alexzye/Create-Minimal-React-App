// File: minimalReactApp.js
// Description: Setup npm package, create project directories and files, and install dependencies.

'use strict'
const fs = require('fs')
const cp = require('child_process')

const [,, ...args] = process.argv
const projectName = args[0]

if (args.length < 1) {
    console.log('ERROR: missing project name argument')
    process.exit(1) 
}

// updates process directory, all commands forward will be within project directory
cp.exec(`mkdir -p ${projectName} && cd ${projectName} && npm init -f`, 
	(initErr, initStdout, initStderr) => {
		
	})
