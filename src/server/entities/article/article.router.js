const express = require('express');
const router = express.Router();

const debug = require('debug')('app:article.router');

require('./controllers/article.create.get.controller');
require('./controllers/article.create.post.controller');
require('./controllers/article.delete.delete.controller');
require('./controllers/article.read.get.controller');
require('./controllers/article.update.get.controller');
require('./controllers/article.update.put.controller');

function createRouter() {


  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
