const express = require('express');

const debug = require('debug')('app:server');

const setupConfig = require('./setup/setup.config');
const setupMiddlewares = require('./setup/setup.middlewares');
const setupRoutes = require('./setup/setup.routes');
const setupDb = require('./setup/setup.db');

const CONFIG = require('./setup/config');

const app = express();

setupConfig(app);
setupMiddlewares(app);
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


setupDb()
  .then(() => {
    app.listen(CONFIG.PORT, () => {
      debug(`Connected to the database`);
      debug(`Running on ${CONFIG.PORT}`);

      debug(CONFIG);
    })
  })
  .catch((e) => {
    debug(`Error connecting to tha database`, e);
    process.exit(1);
  });

