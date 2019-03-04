const passport = require('passport');
require('./strategies/local.strategy');

function setupPassport(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  // stores user in session
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // retrive user in session
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}

module.exports = setupPassport;
