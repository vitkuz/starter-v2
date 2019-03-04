function register(username, email, password, password2) {
  return new Promise((resolve, reject) => {
    resolve({
      user: {
        username,
        email,
        password,
        password2
      }
    })
  });
}

module.exports = {
  register
};
