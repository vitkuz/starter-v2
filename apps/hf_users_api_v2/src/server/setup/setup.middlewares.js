const monitor = require('express-status-monitor');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const expressValidator = require('express-validator');

const patchResponse = require('../middlewares/patch.express.res.middleware');
const language = require('../middlewares/language');
const i18n = require('../middlewares/i18n');
const isAuthorized = require('../middlewares/isAuthorized');

const CONFIG = require('./config');

function setupConfig(app) {

  if (CONFIG.NODE_ENV === 'development') {
    app.use(monitor());
  }

  app.use(helmet()); // protect express app

  if (CONFIG.NODE_ENV === 'production') {
    app.use(compression({ level: 9 })); // compress responses
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(cookieParser());
  app.use(session({
    secret: CONFIG.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    name: 'id',
    // TODO: implement redis store
    // store: new RedisStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      secure: false, // true downt work no https
      // maxAge: 60 * 60 * 24,
    },
  }));

  app.use(morgan('tiny'));

  app.use(patchResponse());
  app.use(i18n());
  app.use(language());
  app.use(isAuthorized());

}

module.exports = setupConfig;
