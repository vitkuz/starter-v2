const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:book.router');

const bookReadGetController = require('./controllers/book.read.get.controller');
const bookCreateGetController = require('./controllers/book.create.get.controller');
const bookUpdateGetController = require('./controllers/book.update.get.controller');

function createRouter() {

  router.get('/book/:bookId', bookReadGetController);
  router.get('/user/create/book', bookCreateGetController);
  router.get('/user/update/book/:bookId', bookUpdateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
