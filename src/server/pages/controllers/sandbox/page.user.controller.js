const debug = require('debug')('app:page.user.controller');
const uuid = require('uuid/v1');
const User = require('../../../models/User');

module.exports = async (req, res, next) => {
  try {

    const newUser = new User({
      uuid: uuid(),
      username: 'Vitali',
      email: `vitkuz.info+${Math.floor(Math.random()*1000)}@gmail.com`,
      password: '210486',
    });

    req.session.user = newUser;

    const createdUser = await newUser.save();


    res.json(createdUser);

    // return res.render('sandbox/page.user.pug', { createdUser });
  } catch (e) {
    debug(e);
    next(e);
  }
};
