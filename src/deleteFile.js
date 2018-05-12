'use strict';

const fs = require('fs');

function deleteFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.unlink(fileName, err => {
      if (err) {
        reject(err);
      } else {
        resolve(fileName);
      }
    });
  });
}

module.exports = deleteFile;
