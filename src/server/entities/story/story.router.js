const express = require('express');
const router = express.Router();

const debug = require('debug')('app:story.router');

const storyReadGetController = require('./controllers/story.read.get.controller');
const storyCreateGetController = require('./controllers/story.create.get.controller');

function createRouter() {

  router.get('/story/:storyId', storyReadGetController);
  router.get('/user/add/story', storyCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'storyion') {

  }

  return router;
}

module.exports = createRouter;
