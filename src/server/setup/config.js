const CONFIG = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  SESSION_SECRET: process.env.SESSION_SECRET || '1234567890',
  PORT: process.env.PORT || 3000,
  USE_MOCKS: process.env.USE_MOCKS || true,
  MONGO_URI: process.env.MONGO_URI
};

module.exports = CONFIG;
