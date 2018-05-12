'use strict';

var fs = require('fs');
var path = require('path');

var formatDate = require('./formatDate');
var deleteFile = require('./deleteFile');

function filterFile(file, options) {
  var filePath = options.filePath,
      expiredType = options.expiredType,
      date = options.date,
      ext = options.ext;

  var now = new Date();
  var fileName = path.join(filePath, file);
  return new Promise(function (resolve, reject) {
    fs.stat(fileName, function (err, stats) {
      if (err) {
        reject(err);
      } else {
        var time = stats[expiredType];
        var distanceTime = formatDate(date);
        var extName = path.extname(fileName);
        if (now - time > distanceTime && (ext === '' || extName === '.' + ext)) {
          deleteFile(fileName).then(function (res) {
            resolve(res);
          });
        } else {
          resolve();
        }
      }
    });
  });
}

module.exports = filterFile;