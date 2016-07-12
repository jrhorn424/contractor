'use strict';

const list = require('./list');
const show = require('./show');
const create = require('./create');
const update = require('./update');
const destroy = require('./destroy');

const all = () => {
  return create()
  .then(list)
  .then(show)
  .then(update)
  .then(destroy)
  ;
};

module.exports = {
  list,
  show,
  create,
  update,
  destroy,
  all,
};
