const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:story.router');

const storyReadGetController = require('./controllers/story.read.get.controller');
const storyCreateGetController = require('./controllers/story.create.get.controller');

function createRouter() {

  router.get('/story/:storyId', storyReadGetController);
  router.get('/user/create/story', storyCreateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'storyion') {

  }

  return router;
}

module.exports = createRouter;
