const mongoose = require('mongoose');
const Scheema = mongoose.Schema;

const UserSchema = new Scheema({
  first_name: {
    type: String,
    trim: true,
    maxlength: 30,
    minlength: 2,
    required: true,
    lowercase: true,
  },
  last_name: {
    type: String,
    trim: true,
    maxlength: 30,
    minlength: 2,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema)