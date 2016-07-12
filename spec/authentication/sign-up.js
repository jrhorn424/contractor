'use strict';

const request = require('superagent-promise-plugin').patch(require('superagent'));

const storage = require('../helpers/storage');
const Credentials = require('../helpers/credentials');

module.exports = () => {
  storage.user = {};
  storage.credentials = new Credentials();
  
  return request.post('http://localhost:3000/sign-up')
  .send({ credentials: storage.credentials })
  .then((response) => storage.user.id = response.body.user._id)
  .catch(console.error)
  ;
};
