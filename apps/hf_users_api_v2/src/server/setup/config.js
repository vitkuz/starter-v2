const dotenv = require('dotenv');
const path = require('path');
const debug = require('debug')('app:config');

const pathToEnvFile = path.join(__dirname, '..', '..', '..', '.env');
const { error, parsed: CONFIG } = dotenv.config({ path: pathToEnvFile });

if (error) {
  debug(`Can't load .env file`, pathToEnvFile);
  process.exit(1);
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  SESSION_SECRET: process.env.SESSION_SECRET,
  PORT: process.env.PORT || 4000,
  USE_MOCKS: process.env.USE_MOCKS,
  MONGO_URI: process.env.MONGO_URI,
  API_AUTH_KEY: process.env.API_AUTH_KEY,
  EVENT_COLLECTOR_HOST: process.env.EVENT_COLLECTOR_HOST,
  VERIFY_USERS: process.env.VERIFY_USERS || false,
}
