const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:book.router');

const bookReadGetController = require('./controllers/book.read.get.controller');
const bookCreateGetController = require('./controllers/book.create.get.controller');

function createRouter() {

  router.get('/book/:bookId', bookReadGetController);
  router.get('/user/add/book', bookCreateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
