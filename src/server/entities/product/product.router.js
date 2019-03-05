const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:product.router');

const productReadGetController = require('./controllers/product.read.get.controller');
const productCreateGetController = require('./controllers/product.create.get.controller');
const productUpdateGetController = require('./controllers/product.update.get.controller');

function createRouter() {

  router.get('/product/:productId', productReadGetController);
  router.get('/user/create/product', productCreateGetController);
  router.get('/user/update/product/:productId', productUpdateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
