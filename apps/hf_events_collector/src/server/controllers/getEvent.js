const _ = require('lodash');
const User = require('../models/User');

const { ENV } = require('../../../config/config');

async function getEvent(req, res) {
    //1 Check user exists, if exist send error
    const activationToken = req.body.activationToken;
    // if (!activationToken) return res.status(400).json({error: req.localization.translate('Provide token')});

    const foundUser = await User.findOne({'tokens.activationToken':activationToken});
    if (!foundUser) return res.status(400).json({error: req.localization.translate('User with this token not found')});

    foundUser.set({
        activated: Date.now(),
        tokens: {
            activationToken: '',
        },
        isActive: true
    });

    const updatedUser = await foundUser.save();
    if (!updatedUser) return res.status(400).json({error: req.localization.translate('Error saving user')});

    res.data.addMessage('success', req.localization.translate('Email was verified. Now you can login'));

    let user;

    if (ENV === 'development') {
        user = updatedUser;
    } else {
        user = _.pick(updatedUser, ['_id', 'username', 'email', 'isActive']);
    }

    return res.status(200).json({
        user
    });

};

module.exports = getEvent;
