const apiV1 = require('../routes/api/v1/index');

const handleError404 = require('../middlewares/error404');
const handleError500 = require('../middlewares/error500');

module.exports = function (app) {
    app.use('/api/v1', apiV1);

    app.use(handleError404); //handle 404 error
    app.use(handleError500); //handle 500 error

    return app;
};
