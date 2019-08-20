'use strict'

const fs = require('fs')
const path = require('path');

module.exports = {
  copyDirectory: (src, dst) => {
    if (!fs.existsSync(dst)) {
      fs.mkdirSync(dst)
    }
    fs.readdir(src, (err, files) => {
        if (err) {
          console.error(err)
          process.exit(1)
        } 
        files.forEach(function (file) {
          fs.copyFileSync(path.join(src, file), path.join(dst, file))
        });
    });
  }
}

