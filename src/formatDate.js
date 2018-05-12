'use strict';

const S = 1000;
const M = 60 * S;
const H = 60 * M;
const D = 24 * H;

/**
 * 格式化可读时间为毫秒
 * 
 * @param {string} date 比如'3d'，'5h'，'8m'，'30s'
 * @returns {number} time
 */
function formatDate(date) {
  const type = date.replace(/([0-9]*)/, '');
  const count = RegExp.$1;
  let time;

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
