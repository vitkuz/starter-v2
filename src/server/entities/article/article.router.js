const express = require('express');
const router = express.Router();

const debug = require('debug')('app:article.router');

require('article.create.get.controller');
require('article.create.post.controller');
require('article.delete.delete.controller');
require('article.read.get.controller');
require('article.update.get.controller');
require('article.update.put.controller');

function createRouter() {


  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
