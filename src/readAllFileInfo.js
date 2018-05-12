'use strict';

const fs = require('fs');
const path = require('path');

const filterFile =  require('./filterFile');

const PWD = path.resolve('./');
const config = { date: '3d', filePath: PWD, expiredType: 'ctime', ext: '' };

/**
 * 读取所有文件信息
 * 
 * @param {any} [options={}] 
 * @return {Promise}
 */
function readAllFileInfo(options = {}) {
  options = Object.assign({}, config, options);
  return new Promise((resolve, reject) => {
    fs.readdir(options.filePath, function(err, files) {
      if (err) {
        reject(err);
      } else {
        Promise.all(files.map(file => {
          return filterFile(file, options);
        }))
          .then(deleteFiles => {
            resolve(deleteFiles.filter(deleteFile => deleteFile));
          });
      }
    });
  });
}

module.exports = readAllFileInfo;
