const express = require('express');
const router = express.Router();

const debug = require('debug')('app:pages.router');

const page404Controller = require('./controllers/page.404.controller');
const page403Controller = require('./controllers/page.403.controller');
const page500Controller = require('./controllers/page.500.controller');

const pageKillController = require('./controllers/page.kill.controller');
const pageHealthController = require('./controllers/page.health.controller');

function createRouter() {

  router.get('/system/page404', page404Controller);
  router.get('/system/page403', page403Controller);
  router.get('/system/page500', page500Controller);

  router.get('/system/health', pageHealthController);

  if (process.env.NODE_ENV === 'development') {
    router.get('/system/kill', pageKillController);
  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
