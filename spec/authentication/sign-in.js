'use strict';

const request = require('superagent-promise-plugin').patch(require('superagent'));

const storage = require('../helpers/storage');

const signUp = require('./sign-up');

module.exports = () => {
  if (!storage.user || !storage.user.id) {
    signUp();
  }
  
  return request.post('http://localhost:3000/sign-in')
  .send({ credentials: storage.credentials })
  .then((response) => storage.user.token = response.body.user.token)
  .catch(console.error)
  ;
};
