const express = require('express');
const router = express.Router();
const _ = require('lodash');
const axios = require('axios');

// const UsersRouter = require('./users/index');

const eventProcessor = {
    'howfinder_userDeleted': () => {
        console.log('DO STUFF');
    },
    'howfinder_userLogin': () => {
        console.log('DO STUFF');
    },
    'howfinder_userAuthBySocial': () => {
        console.log('DO STUFF');
    },
    'howfinder_userGet': () => {
        console.log('DO STUFF');
    },
    'howfinder_userRegistered': () => {
        console.log('DO STUFF');
    },
    'howfinder_paswordReseted': () => {
        console.log('DO STUFF');
    },
    'howfinder_resetPasswordLinkSent': () => {
        console.log('DO STUFF');
    },
    'howfinder_userUpdated': () => {
        console.log('DO STUFF');
    },
    'howfinder_userVerifiedEmail': () => {
        console.log('DO STUFF');
    },
    'howfinder_sendEmailVerification': () => {
        console.log('DO STUFF');
    },
    'howfinder_sendRestPasswordEmail': () => {
        console.log('DO STUFF');
    }
}

router.use('/', (req,res,next) => {
    console.log({body:req.body});

    const eventName = _.get(req, 'body.event');

    if (eventProcessor[eventName] && typeof eventProcessor[eventName] === 'function') {
        eventProcessor[eventName]();
    } else {
        console.log(eventName+' processor event with this name not found')
    }

    res.json({
        result:'ok',
        body: {
            ...req.body
        }
    });
});

module.exports = router;