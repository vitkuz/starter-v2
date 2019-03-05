const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:channel.router');

const channelReadGetController = require('./controllers/channel.read.get.controller');
const channelCreateGetController = require('./controllers/channel.create.get.controller');

function createRouter() {

  router.get('/channel/:channelId', channelReadGetController);
  router.get('/user/add/channel', channelCreateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
