const mongoose = require('mongoose');
const debug = require('debug')('app:setup.db');

const CONFIG = require('./config');

function setupDb() {
  return mongoose.connect(CONFIG.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
}

module.exports = setupDb;
