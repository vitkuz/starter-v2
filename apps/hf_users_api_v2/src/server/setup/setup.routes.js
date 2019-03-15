const appRoutes = require('../routes/index');

function setupRoutes(app) {
  app.use('/api/v1', appRoutes);
}

module.exports = setupRoutes;
