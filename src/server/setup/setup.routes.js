const userRouter = require('../entities/user/user.router');

function setupRoutes(app) {
  app.use(userRouter())
}

module.exports = setupRoutes;
