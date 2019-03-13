const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 12;

const Schema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
    // validate: {
    //   validator: () => {},
    //   message: props => `${props.value} is not valid email`
    // }
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{
    type: String,
    default: 'member'
  }],
  // timestamps: true
});

Schema.pre('save', async function preSave(next) {
  const user = this;
  if(!user.isModified('password')) {
    return next()
  }
  try {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model('User', Schema);
