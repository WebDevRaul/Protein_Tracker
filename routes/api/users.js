const express = require('express')
const router  = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')

// Load User Model
const User = require('../../models/User');
const Table = require('../../models/Table');

// Load Register Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router
  .post('/register', (req, res) => {

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

// @route   Post api/register/defaultItems
// @desc    Save default items to new Users
// @access  Privat
router
  .post('/register/defaultItems', (req, res) => {

    // New Validation

    const {email} = req.body;

    User.findOne({ email })
      .then(user => {
        if (user) {
          // Create item(s)
          const item = new Item ({
            user: user._id,
            product_name: req.body.product_name,
            quantity: req.body.quantity,
            type: req.body.type,
            calories: req.body.calories,
            protein: req.body.protein,
            fat: req.body.fat,
            carbohydrates: req.body.carbohydrates
          })

          item.save().then(() => res.json({ success: 'Default Items added'}))
        }
      })
      .catch(err => res.status(404).json(err))
  })


module.exports = router;