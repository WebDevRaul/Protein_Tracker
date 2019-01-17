const express = require('express')
const router  = express.Router();
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../../models/User');

// Load Register Validation
const validateRegisterInput = require('../../validation/register');


// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {

  // Validation //

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  };

  // Fetch User

  User.findOne({ email: req.body.email })
  .then(user => {
    // Check for user
    if (user) {
      return res.status(400).json({email: 'Email already exists'})
    } else {
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          // Save User To DB

          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        })
      })
    }
  })
});

module.exports = router;