const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:course.router');

const courseReadGetController = require('./controllers/course.read.get.controller');
const courseCreateGetController = require('./controllers/course.create.get.controller');
const courseUpdateGetController = require('./controllers/course.update.get.controller');

function createRouter() {

  router.get('/course/:courseId', courseReadGetController);
  router.get('/user/create/course', courseCreateGetController);
  router.get('/user/update/course/:courseId', courseUpdateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
