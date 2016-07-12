'use strict';

const request = require('superagent-promise-plugin').patch(require('superagent'));

const storage = require('../helpers/storage');

const signUp = require('./sign-up');
const signIn = require('./sign-in');

module.exports = () => {
  if (!storage.user.id || !storage.user.token) {
    signUp().then(signIn);
  }

  return request.delete(`http://localhost:3000/sign-out/${storage.user.id}`)
  .set('Authorization', `Token token=${storage.user.token}`)
  .then(() => delete storage.user.token)
  .catch(console.error)
  ;
};
