const { validationResult } = require('express-validator/check');

module.exports = function(req, res, next) {

    const errors = validationResult(req);
    const containsErrors = !errors.isEmpty();
    if (containsErrors) {
        const e = errors.array();

        e.forEach(error => {
            res.data.addMessage('error', error);
        });

        console.log(e);
        return res.status(422).json({ errors:e });
    }

    next();
};
