'use strict';

var S = 1000;
var M = 60 * S;
var H = 60 * M;
var D = 24 * H;

/**
 * 格式化可读时间为毫秒
 * 
 * @param {string} date 比如'3d'，'5h'，'8m'，'30s'
 * @returns {number} time
 */
function formatDate(date) {
  var type = date.replace(/([0-9]*)/, '');
  var count = RegExp.$1;
  var time = void 0;

  switch (type) {
    case 'd':
      time = count * D;
      break;
    case 'h':
      time = count * H;
      break;
    case 'm':
      time = count * M;
      break;
    case 's':
      time = count * S;
      break;
    default:
      time = count * D;
      break;
  }

  return time;
}

module.exports = formatDate;