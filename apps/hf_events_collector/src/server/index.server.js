const path = require('path');
const express = require('express');

const configPath = path.join(__dirname, '..', '..', '.env');
require('dotenv').config({ path: configPath});

const { ENV, PORT } = require('../../config/config');

const app = express();

// Express app config
require('./onstartup/appconfig')(app);
// Apply all routes
require('./onstartup/routes')(app);
// Db connection
// require('./onstartup/db')(app);

process.on('uncaughtException', (ex) => {
    console.log('WE GOT AN UNCAUGHT EXCEPTION');
    console.log(ex.message, ex);
    // application specific logging, throwing an error, or other logic here
    process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
    process.exit(1);
});

console.log('@todo: Implement logging in case:uncaughtException,unhandledRejection ');

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Running on ${PORT}. Environment ${ENV}`);
});

