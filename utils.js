'use strict'

const shell = require('child_process').execSync ; 

module.exports = {
  copyDirectory: (src, dist) => {
    shell(`mkdir -p ${dist}`);
    shell(`cp -r ${src} ${dist}`);
  }
}

