const express = require('express');
const dotenv = require('dotenv');
const debug = require('debug')('app:server');

const CONFIG = require('./setup/config');

const setupConfig = require('./setup/setup.config');
const setupMiddlewares = require('./setup/setup.middlewares');
// const setupPassport = require('./setup/setup.passport');
const setupRoutes = require('./setup/setup.routes');

dotenv.config();

const app = express();

setupConfig(app);
setupMiddlewares(app);
// setupPassport(app);
setupRoutes(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

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

app.listen(CONFIG.PORT, () => {
  debug(`Running on ${CONFIG.PORT}`);
});
