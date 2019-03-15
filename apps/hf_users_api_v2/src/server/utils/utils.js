const axios = require('axios');
const CONFIG = require('../setup/config');

function postEvent(event) {
  return new Promise((resolve,reject) => {
    axios.post(CONFIG.EVENT_COLLECTOR_HOST, event).then(response => {
      resolve(response);
    }).catch(e => {
      console.log(e);
      reject(e);
    });
  });

  return event;
}

module.exports = postEvent;
