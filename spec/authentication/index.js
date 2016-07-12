'use strict';

const signUp = require('./sign-up');
const signIn = require('./sign-in');
const changePassword = require('./change-password');
const signOut = require('./sign-out');

const all = () => {
  return signUp()
  .then(signIn)
  .then(changePassword)
  .then(signOut)
  ;
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  all,
};
