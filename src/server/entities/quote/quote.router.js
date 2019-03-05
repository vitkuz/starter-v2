const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:quote.router');

const quoteReadGetController = require('./controllers/quote.read.get.controller');
const quoteCreateGetController = require('./controllers/quote.create.get.controller');
const quoteUpdateGetController = require('./controllers/quote.update.get.controller');

function createRouter() {

  router.get('/quote/:quoteId', quoteReadGetController);
  router.get('/user/create/quote', quoteCreateGetController);
  router.get('/user/update/quote/:quoteId', quoteUpdateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'quoteion') {

  }

  return router;
}

module.exports = createRouter;
