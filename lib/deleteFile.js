'use strict';

var fs = require('fs');

function deleteFile(fileName) {
  return new Promise(function (resolve, reject) {
    fs.unlink(fileName, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(fileName);
      }
    });
  });
}

module.exports = deleteFile;