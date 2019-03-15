const express = require('express');
const router = express.Router();

const debug = require('debug')('app:pages.router');

function createRouter() {

  if (process.env.NODE_CONFIG.NODE_ENV === 'development') {
    router.get('/system/kill', pageKillController);
  }

  if (process.env.NODE_CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
