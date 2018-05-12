'use strict';

/* eslint-env mocha */

const chai = require('chai');

const formatDate = require('../lib/formatDate');

const expect = chai.expect;
const S = 1000;
const M = 60 * S;
const H = 60 * M;
const D = 24 * H;

describe('format dete', () => {
  it('test 3d', function() {
    expect(formatDate('3d')).to.be.equal(3 * D);
  });

  it('test 2h', function() {
    expect(formatDate('2h')).to.be.equal(2 * H);
  });

  it('test 2m', function() {
    expect(formatDate('2m')).to.be.equal(2 * M);
  });

  it('test 2s', function() {
    expect(formatDate('2s')).to.be.equal(2 * S);
  });
});