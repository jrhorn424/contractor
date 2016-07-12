'use strict';

const request = require('superagent-promise-plugin').patch(require('superagent'));

const storage = require('../helpers/storage');

const signUp = require('./sign-up');
const signIn = require('./sign-in');

module.exports = () => {
  if (!storage.user.id || !storage.user.token || !storage.credentials) {
    signUp().then(signIn);
  }

  let passwords = {
    old: 'foobar',
    new: 'bazqux',
  };
  
  return request.patch(`http://localhost:3000/change-password/${storage.user.id}`)
  .set('Authorization', `Token token=${storage.user.token}`)
  .send({ passwords })
  .then(() => storage.credentials.password = passwords.new)
  .then(signIn)
  .catch(console.error)
  ;
};
