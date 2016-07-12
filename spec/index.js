'use strict';

const authentication = require('./authentication');
const crud = require('./crud');
const authorization = require('./authorization');

const all = () => {
  return authentication.all()
  .then(crud.all)
  .then(authorization.all)
  ;
};

module.exports = {
  authentication,
  crud,
  authorization,
  all,
};
