const express = require('express');
const router = express.Router();
const _ = require('lodash');
const axios = require('axios');

// const UsersRouter = require('./users/index');

const eventProcessor = {
    'howfinder_sendFatalErrorEmail': () => {
        console.log('DO STUFF');
    },
    'howfinder_sendWeeklyEmail': () => {
        console.log('DO STUFF');
    },
    'howfinder_sendWelcomeEmail': () => {
        console.log('DO STUFF');
    },
    'howfinder_sendVerificationEmail': () => {
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