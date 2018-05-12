'use strict';

var fs = require('fs');
var path = require('path');

var filterFile = require('./filterFile');

var PWD = path.resolve('./');
var config = { date: '3d', filePath: PWD, expiredType: 'ctime', ext: '' };

/**
 * 读取所有文件信息
 * 
 * @param {any} [options={}] 
 * @return {Promise}
 */
function readAllFileInfo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options = Object.assign({}, config, options);
  return new Promise(function (resolve, reject) {
    fs.readdir(options.filePath, function (err, files) {
      if (err) {
        reject(err);
      } else {
        Promise.all(files.map(function (file) {
          return filterFile(file, options);
        })).then(function (deleteFiles) {
          resolve(deleteFiles.filter(function (deleteFile) {
            return deleteFile;
          }));
        });
      }
    });
  });
}

module.exports = readAllFileInfo;