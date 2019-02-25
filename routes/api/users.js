const express = require('express')
const router  = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')

// Load User Model
const User = require('../../models/User');
const Item = require('../../models/Item');

// Load Register Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router
  .post('/register', (req, res) => {

    // Validation //

    const { errors, isValid } = validateRegisterInput(req.body.user);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    };

    const { user } = req.body;

    // Fetch User

    User.findOne({ email: user.email })
    .then(userData => {
      // Check for user
      if (userData) {
        return res.status(400).json({email: 'Email already exists'})
      } else {
        const newUser = new User({
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          password: user.password
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

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router
  .post('/login', (req, res) => {
    // Validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(404).json(errors)
    };
    

    const email = req.body.email;
    const password = req.body.password;

    // Find User by email
    User.findOne({ email })
      .then(user => {
        // Check for user
        if (!user) {
          errors.email = 'User not found';
          return res.status(404).json(errors)
        };

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            // User Matched
            const payload = {id: user.id, first_name: user.first_name, last_name: user.last_name};
    
            // Sign Token
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              }
            );
          } else {
            errors.password = 'Password incorrect';
            return res.status(400).json(errors);
          }
        });
      });
  });

module.exports = router;