function promiseAll (promises) {
  const results = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((result) => {
        results[index] = result;
        counter++;

        if (counter === promises.length) {
          resolve(results);
        }
      }).catch((e) => {
        results[index] = {};
        counter++;

        if (counter === promises.length) {
          resolve(results);
        }
      })
    })
  })
}

module.exports = {
  promiseAll
};
