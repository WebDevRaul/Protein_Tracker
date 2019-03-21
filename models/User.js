const mongoose = require('mongoose');
const Scheema = mongoose.Schema;

// Create User Scheema
const UserSchema = new Scheema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  newUser: {
    type: String,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema)