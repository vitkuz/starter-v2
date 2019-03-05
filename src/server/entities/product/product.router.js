const express = require('express');
const router = express.Router();

const debug = require('debug')('app:product.router');

const productReadGetController = require('./controllers/product.read.get.controller');
const productCreateGetController = require('./controllers/product.create.get.controller');

function createRouter() {

  router.get('/product/:productId', productReadGetController);
  router.get('/user/add/product', productCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
