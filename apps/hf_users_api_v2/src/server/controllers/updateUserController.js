const User = require('../models/User');
const _ = require('lodash');

const { postEvent } = require('../utils/utils');
const CONFIG = require('../setup/config');

const hashUserPassword = require('../utils/hashUserPassword');

async function updateUserController(req,res) {
  try {
    const id = req.params.id;

    let foundUser = await User.findById(id);
    if (!foundUser) {
      return res.status(400).json({
        error: req.getLabel('User not found')
      });
    }

    const username = req.body.username;
    foundUser.username = username || foundUser.username;

    const email = req.body.email;


    if (email) {
      // foundUser.email = email || foundUser.email;
      if (email !== foundUser.email) {
        res.addMessage('warning', req.getLabel('You can\'t update email. Create new account'))
      }
    }

    let firstname, lastname, website, vk, google,
      facebook, odnoklassniki, twitter, youtube, instagram;

    firstname = req.body.firstname;
    lastname = req.body.lastname;
    website = req.body.website;

    foundUser.profile = foundUser.profile || {};

    foundUser.profile.firstname = firstname;
    foundUser.profile.lastname = lastname;
    foundUser.profile.website = website;

    vk = req.body.vk;
    facebook = req.body.facebook;
    google = req.body.google;
    odnoklassniki = req.body.odnoklassniki;
    twitter = req.body.twitter;
    youtube = req.body.youtube;
    instagram = req.body.instagram;

    foundUser.profile.vk = vk;
    foundUser.profile.facebook = facebook;
    foundUser.profile.google = google;
    foundUser.profile.odnoklassniki = odnoklassniki;
    foundUser.profile.twitter = twitter;
    foundUser.profile.youtube = youtube;
    foundUser.profile.instagram = instagram;

    const password = req.body.password;
    const newPassword = req.body.newPassword;

    if (newPassword && password) {
      const hashedPassword = await hashUserPassword(password);

      if (foundUser.password === hashedPassword) {
        foundUser.password = await hashUserPassword(newPassword);
        res.addMessage('success', req.getLabel('Password has been changed'));
      } else {
        res.addMessage('error', req.getLabel('Password hasn\'t been changed'));
      }
    }

    let updatedUser = await foundUser.save();
    if (!updatedUser) return res.status(400).json({error: req.getLabel('Error saving user')});

    res.addMessage('success', req.getLabel('User has been updated and save'));
    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = updatedUser;
    } else {
      user = _.pick(updatedUser, ['_id', 'username', 'email', 'isActive']);
    }

    postEvent({
      event: 'howfinder_userUpdated',
      date: Date.now(),
      payload: user
    });

    res.json({
      user
    });
  } catch(e) {
    next(e);
  }
}

module.exports = updateUserController;
