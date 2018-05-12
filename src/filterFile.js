'use strict';

const fs = require('fs');
const path = require('path');

const formatDate = require('./formatDate');
const deleteFile = require('./deleteFile');

function filterFile(file, options) {
  const { filePath, expiredType, date, ext } = options;
  const now = new Date();
  const fileName = path.join(filePath, file);
  return new Promise((resolve, reject) => {
    fs.stat(fileName, (err, stats) => {
      if (err) {
        reject(err);
      } else {
        const time = stats[expiredType];
        const distanceTime = formatDate(date);
        const extName = path.extname(fileName);
        if (now - time > distanceTime && (ext ==='' || extName === `.${ext}`)) {
          deleteFile(fileName)
            .then((res) => {
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
