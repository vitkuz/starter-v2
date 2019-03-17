const express = require('express');
const router = express.Router();

const isAuthorized = require('../middlewares/isAuthorized');

// const sanitizeRequest = require('../../../../middlewares/sanitizeRequest');
// const checkValidationErrors = require('../../../../middlewares/checkValidationErrors');
// const hasPermission = require('../../../../middlewares/hasPermission');

const loginUserController = require('../controllers/loginUserController');
const getUserController = require('../controllers/getUserController');
const registerUserController = require('../controllers/registerUserController');
const deleteUserController = require('../controllers/deleteUserController');
const verifyUserEmailController = require('../controllers/verifyUserEmailController');
const sendResetPasswordLinkController = require('../controllers/sendResetPasswordLinkController');
const resetPasswordController = require('../controllers/resetPasswordController');
const updateUserController = require('../controllers/updateUserController');
const listUsersController = require('../controllers/listUsersController');
const authBySocialId = require('../controllers/authBySocialId');

router.post('/user/login',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
    loginUserController);

router.post('/user/register',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
    registerUserController);

router.post('/user/verify',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
    verifyUserEmailController);

router.post('/user/password/reset',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
    resetPasswordController);

router.post('/user/send/password',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
    sendResetPasswordLinkController);

// /api/v1/users
router.get('/users',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
    listUsersController);

router.post('/users',
    // isAuthorized,
    // sanitizeRequest,
    registerUserController);

router.post('/user/login/social',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
    authBySocialId);

router.get('/users/:id',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
    getUserController);

router.delete('/users/:id',
    // isAuthorized,
    // sanitizeRequest,
    // hasPermission,
    // checkValidationErrors,
    deleteUserController);

router.put('/users/:id',
    // isAuthorized,
    // sanitizeRequest,
    // hasPermission,
    // checkValidationErrors,
    updateUserController);

module.exports = router;
