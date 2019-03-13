const express = require('express');

const debug = require('debug')('app:server');

const setupConfig = require('./setup/setup.config');
const setupMiddlewares = require('./setup/setup.middlewares');
// const setupPassport = require('./setup/setup.passport');
const setupRoutes = require('./setup/setup.routes');
const setupDb = require('./setup/setup.db');

const CONFIG = require('./setup/config');

const app = express();

setupConfig(app);
setupMiddlewares(app);
// setupPassport(app);
setupRoutes(app);


app.use((req, res) => {
  return res.status(404).send(`page not found`);
});

app.use((err, req, res) => {
  if (CONFIG.NODE_ENV === 'production') {
    return res.status(500).send('something wen\'t wrong');
  }
  return res.status(500).send(`hey!! we caugth the error 👍👍, ${err.stack} `);
});

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', (err) => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });


// TODO: add lint
// TODO: implement https
// TODO: implement sokets
// TODO: implement webpack, sass
// TODO: implement pm2
// TODO: integration with youtube API
// TODO: integration with google maps API
// TODO: integration with google translate API
// TODO: integration with wit.ai API

setupDb()
  .then(() => {
    app.listen(CONFIG.PORT, () => {
      debug(`Connected to the database`);
      debug(`Running on ${CONFIG.PORT}`);
    })
  })
  .catch((e) => {
    debug(`Error connecting to tha database`, e);
    process.exit(1);
  });

