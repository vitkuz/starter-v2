const express = require('express');
const router = express.Router();

const debug = require('debug')('app:pages.router');

const page404Controller = require('./controllers/page.404.controller');
const page403Controller = require('./controllers/page.403.controller');
const page500Controller = require('./controllers/page.500.controller');

const pageKillController = require('./controllers/page.kill.controller');
const pageHealthController = require('./controllers/page.health.controller');

const pageHomeController = require('./controllers/page.home.controller');

const pageArticlesController = require('./controllers/page.articles.controller');
const pageBooksController = require('./controllers/page.books.controller');
const pageChannelsController = require('./controllers/page.channels.controller');
const pageCoursesController = require('./controllers/page.courses.controller');
const pageEventsController = require('./controllers/page.events.controller');
const pageFilesController = require('./controllers/page.files.controller');
const pageIdeasController = require('./controllers/page.ideas.controller');
const pageInfographicsController = require('./controllers/page.infographics.controller');
const pageLinksController = require('./controllers/page.links.controller');
const pageMoviesController = require('./controllers/page.movies.controller');
const pageProductsController = require('./controllers/page.products.controller');
const pageQuotesController = require('./controllers/page.quotes.controller');
const pageStoriesController = require('./controllers/page.stories.controller');
const pageSummariesController = require('./controllers/page.summaries.controller');
const pageToolsController = require('./controllers/page.tools.controller');
const pageUsersController = require('./controllers/page.users.controller');
const pageVideosController = require('./controllers/page.videos.controller');

const pageCreateUser = require('./controllers/sandbox/page.user.controller');

function createRouter() {

  router.get('/system/page404', page404Controller);
  router.get('/system/page403', page403Controller);
  router.get('/system/page500', page500Controller);

  router.get('/system/health', pageHealthController);

  router.get('/', pageHomeController);

  router.get('/articles', pageArticlesController);
  router.get('/books', pageBooksController);
  router.get('/channels', pageChannelsController);
  router.get('/courses', pageCoursesController);
  router.get('/events', pageEventsController);
  router.get('/files', pageFilesController);
  router.get('/ideas', pageIdeasController);
  router.get('/infographics', pageInfographicsController);
  router.get('/links', pageLinksController);
  router.get('/movies', pageMoviesController);
  router.get('/products', pageProductsController);
  router.get('/quotes', pageQuotesController);
  router.get('/stories', pageStoriesController);
  router.get('/summaries', pageSummariesController);
  router.get('/tools', pageToolsController);
  router.get('/users', pageUsersController);
  router.get('/videos', pageVideosController);

  router.get('/sandbox/create-user', pageCreateUser);

  if (process.env.NODE_ENV === 'development') {
    router.get('/system/kill', pageKillController);
  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
