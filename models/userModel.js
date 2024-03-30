const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
    trim: true,
    minlength: [10, 'A user name must have more than or equal 10 characters'],
    validate: [validator.isAlpha, 'A user name must only contain characters'],
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
    required: [true, 'A user must have a cover image'],
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    unique: true,
    trim: true,
    maxlength: [40, 'A user name must have less than or equal 40 characters'],
    minlength: [8, 'A user name must have more than or equal 8 characters'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'password must be the same'],
    unique: true,
    trim: true,
    maxlength: [40, 'A user name must have less than or equal 40 characters'],
    minlength: [8, 'A user name must have more than or equal 8 characters'],
  },
});
const User = mongoose.model('User', userSchema);

module.exports = User;
