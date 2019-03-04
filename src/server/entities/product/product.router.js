const express = require('express');
const router = express.Router();

const debug = require('debug')('app:product.router');

function createRouter() {


  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
