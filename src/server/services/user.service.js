const axios = require('axios');
const debug = require('debug')('app:user.service');
const CONFIG = require('../setup/config');

function register(user) {
  return new Promise((resolve, reject) => {

    debug(`Making post request to: ${CONFIG.HF_USERS_API}/api/v1/user/register?apiKey=${CONFIG.HF_USERS_API_KEY}`,user);

    axios.post(`${CONFIG.HF_USERS_API}/api/v1/user/register?apiKey=${CONFIG.HF_USERS_API_KEY}`, user).then((response) => {
      resolve(response);
    }).catch(err => {
      debug(err);
      reject(err)
    });
  });
}

function login(user) {
  return new Promise((resolve, reject) => {

    debug(`Making post request to: ${CONFIG.HF_USERS_API}/api/v1/user/login?apiKey=${CONFIG.HF_USERS_API_KEY}`,user);

    axios.post(`${CONFIG.HF_USERS_API}/api/v1/user/login?apiKey=${CONFIG.HF_USERS_API_KEY}`, user).then((response) => {
      resolve(response);
    }).catch(err => {
      debug(err);
      reject(err)
    });
  })
}

function sendResetPasswordLink(user) {
  return new Promise((resolve, reject) => {

    debug(`Making post request to: ${CONFIG.HF_USERS_API}/api/v1/user/send/password?apiKey=${CONFIG.HF_USERS_API_KEY}`,user);

    axios.post(`${CONFIG.HF_USERS_API}/api/v1/user/send/password?apiKey=${CONFIG.HF_USERS_API_KEY}`, user).then((response) => {
      resolve(response);
    }).catch(err => {
      debug(err);
      reject(err)
    });
  })
}

function resetPassword(user) {
  return new Promise((resolve, reject) => {

    debug(`Making post request to: ${CONFIG.HF_USERS_API}/api/v1/user/password/reset?apiKey=${CONFIG.HF_USERS_API_KEY}`, user);

    axios.post(`${CONFIG.HF_USERS_API}/api/v1/user/password/reset?apiKey=${CONFIG.HF_USERS_API_KEY}`, user).then((response) => {
      resolve(response);
    }).catch(err => {
      debug(err);
      reject(err)
    });
  })
}

function verifyEmail(user) {
  return new Promise((resolve, reject) => {

    debug(`Making post request to: ${CONFIG.HF_USERS_API}/api/v1/user/verify?apiKey=${CONFIG.HF_USERS_API_KEY}`, user);

    axios.post(`${CONFIG.HF_USERS_API}/api/v1/user/verify?apiKey=${CONFIG.HF_USERS_API_KEY}`, user).then((response) => {
      resolve(response);
    }).catch(err => {
      debug(err);
      reject(err)
    });
  })
}

module.exports = {
  register,
  login,
  sendResetPasswordLink,
  resetPassword,
  verifyEmail,
};
