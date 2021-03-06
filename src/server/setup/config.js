const dotenv = require('dotenv');
const path = require('path');
const debug = require('debug')('app:config');

const pathToEnvFile = path.join(__dirname, '..', '..', '..', '.env');
const { error, parsed: CONFIG } = dotenv.config({ path: pathToEnvFile });

if (error) {
  debug(`Can't load .env file`);
  process.exit(1);
}

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  SESSION_SECRET: process.env.SESSION_SECRET,
  PORT: process.env.PORT || 3000,
  USE_MOCKS: process.env.USE_MOCKS,
  MONGO_URI: process.env.MONGO_URI,
  HF_USERS_API: process.env.HF_USERS_API,
  HF_USERS_API_KEY: process.env.HF_USERS_API_KEY,
  HF_QUOTES_API: process.env.HF_QUOTES_API,
  HF_QUOTES_API_KEY: process.env.HF_QUOTES_API_KEY,
}
