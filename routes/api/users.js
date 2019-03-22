const express = require('express')
const router  = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys')
const passport = require('passport');

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
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    };

    const { email, first_name, last_name, password } = req.body;
    // Fetch User
    User.findOne({ email })
    .then(userData => {
      // Check for user
      if (userData) {
        return res.status(400).json({email: 'Email already exists'})
      } else {
        const newUser = new User({ first_name, last_name, email, password });
        console.log(newUser)

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
            const payload = {id: user.id, first_name: user.first_name, last_name: user.last_name, newUser: user.newUser};
    
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

// @route   Post api/users/login/:id
// @desc    Save default Items
// @access  Private
router
  .post('/login/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    const { item } = req.body;

    User.findOne({ _id: req.params.id })
      .then(user => {
        if (user._id.toString() !== req.user._id.toString()) {
          // Check for owner
          return res.status(401).json({ notAuthorized: 'User not authorized' });
        }
        
        const promises = [];
        for (let i = 0; i < item.length; i++) {
          const arr = new Item ({
            user: req.user._id,
            product_name: item[i].product_name,
            quantity: item[i].quantity,
            type: item[i].type,
            calories: item[i].calories,
            protein: item[i].protein,
            fat: item[i].fat,
            carbohydrates: item[i].carbohydrates
          })
          promises.push(arr.save())
        }
        return Promise.all(promises).then(() => res.json({ newUser: 'New user' }))
      })
      .catch(err => res.status(404).json({ noUserFound: 'User not found' }))
  });

// @route   GET api/users/login/user/update/:id
// @desc    Update newUser to false
// @access  Private
router
  .post('/login/update/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => {
        if (user._id.toString() !== req.user.id.toString()) {
          return res.status(401).json({ notAuthorized: 'User not authorized' });
        }
        // Update
        User.findOneAndUpdate(
          { _id: req.user.id },
          {$set:{newUser: false}},
          {new: true},
          () => {
            User.findOne({ _id: req.params.id })
            .then(user => res.json({ update: true }))
            .catch(err => res.status(404).json({ noUserFound: 'User not found' }))
          }
        )
      })
      .catch(err => res.status(404).json({ noUserFound: 'User not found' }))
  });


module.exports = router;