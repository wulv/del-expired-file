
'use strict';

/* eslint-env mocha */
const path = require('path');
const fs = require('fs');
const chai = require('chai');

const delExpiredFile = require('../lib');

const expect = chai.expect;
const filesPath = path.join(__dirname, 'files');

if (!fs.existsSync(filesPath)) {
  fs.mkdirSync(filesPath);
}

describe('delete expired 5s log file', () => {
  it('create 1.txt', function() {
    const fileName = path.join(__dirname, 'files/1.txt');
    fs.writeFileSync(fileName, 'Hello Node.js', 'utf8');
    const fileInst = fs.statSync(fileName);
    expect(fileInst).to.be.an('object');
  });

  it('create 1.log', function() {
    const fileName = path.join(__dirname, 'files/1.log');
    fs.writeFileSync(fileName, 'Hello Node.js', 'utf8');
    const fileInst = fs.statSync(fileName);
    expect(fileInst).to.be.an('object');
  });
});

describe('delete file', function() {
  before(function(done) {
    this.timeout(3000);
    setTimeout(done, 2000);
  });

  it('not expired dont delete any file', function() {
    return delExpiredFile({
      filePath: filesPath,
      expiredType: 'ctime',
      date: '3s',
    })
      .then((res) => {
        expect(res).to.be.an('array');
        expect(res.length).to.be.equal(0);
      });
  });

  it('delete expired log file', function() {
    const fileName = path.join(__dirname, 'files/1.log');
    return delExpiredFile({
      filePath: filesPath,
      ext: 'log',
      expiredType: 'ctime',
      date: '1s',
    })
      .then((res) => {
        expect(res).to.be.an('array');
        expect(res.length).to.be.equal(1);
        expect(res[0]).to.be.equal(fileName);
      });
  });

  it('delete all file', function() {
    const fileName = path.join(__dirname, 'files/1.txt');
    return delExpiredFile({
      filePath: filesPath,
      expiredType: 'ctime',
      date: '1s',
    })
      .then((res) => {
        expect(res).to.be.an('array');
        expect(res.length).to.be.equal(1);
        expect(res[0]).to.be.equal(fileName);
      });
  });
});


