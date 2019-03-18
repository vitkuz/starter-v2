const passport = require('passport');
const { Strategy } = require('passport-local');

function setLocalStrategy() {
  passport.use(new Strategy({
    usernameField: username,
    passwordField: userpass,
  }, (username, password, done) => {
    console.log(username, password);
    const user = {
      id: 1,
      username: 'Vitakuz',
      password: '210486',
    };
    return done(null, user);
  }));
}

module.exports = setLocalStrategy();
