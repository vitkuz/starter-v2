const path = require('path');
const express = require('express');

const debug = require('debug')('app:setup.config');

function setupConfig(app) {

  app.enable('trust proxy', 1);

  const staticPath = path.join(__dirname, '..', '..', '..', 'public');
  app.use(express.static(staticPath));

  const viewsPaths = [
    path.join(__dirname, '..', 'views'),
    path.join(__dirname, '..', 'entities', 'user', 'views'),
    path.join(__dirname, '..', 'pages', 'views'),
  ];

  debug(staticPath, viewsPaths);

  app.set('views',viewsPaths);
  app.set('view engine', 'pug');
}

module.exports = setupConfig;
