const jwt = require('jsonwebtoken');

const {JWT_SECRET} = require('../../../config/config');

module.exports = function(req, res, next) {
    const id = req.params.id;
    if (!id) return res.status(422).json({
        error: 'Id is required field'
    });

    const _jwt = req.header('x-auth');

    if (!id) return res.status(422).json({
        error: 'JwtToken header is required for this action'
    });

    let decodedUser;

    try {
        decodedUser = jwt.verify(_jwt, JWT_SECRET);
    } catch (e) {
        console.log(e);

        return res.status(422).json({
            error: 'JwtToken has expired'
        });
    }


    const isOwner = decodedUser._id === id;

    if (isOwner) {
        next();
    } else {
        return res.status(403).json({
            error: 'You don\'t have permissions'
        })
    }
};
