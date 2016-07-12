'use strict';

const randomHex = require('./random-hex');

const Credentials = function () {
  this.email = `${randomHex(16)}@example.com`;
  this.password = 'foobar';
  this.password_confirmation = 'foobar';
};

module.exports = Credentials;
