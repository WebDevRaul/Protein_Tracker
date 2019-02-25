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

// @route   Post api/users/login/:id
// @desc    Save default Items
// @access  Private
router
  .post('/login/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    const { item } = req.body;

    User.findOne({ _id: req.params.id })
      .then(user => {
        console.log(user);
        if (user._id.toString() !== req.user._id.toString()) {
          // Check for owner
          return res.status(401).json({ notAuthorized: 'User not authorized' });
        } else {
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
            arr.save().then(() => res.json({ success: 'success' }))
          }
        }
      })
      .catch(err => res.status(404).json({ noUserFound: 'User not found' }))
    


    // User.findOne({ _id: req.params.id })
    //   .then(user => {
    //     if (user._id.toString() !== req.user._id.toString()) {
    //       // Check for owner
    //       return res.status(401).json({ notAuthorized: 'User not authorized' });
    //     } else {
    //       let arr = [];
    //       for (let i = 0; i < item.length; i++) {
    //         arr = new Item ({
    //           user: req.user._id,
    //           product_name: data[i].product_name,
    //           quantity: data[i].quantity,
    //           type: data[i].type,
    //           calories: data[i].calories,
    //           protein: data[i].protein,
    //           fat: data[i].fat,
    //           carbohydrates: data[i].carbohydrates
    //         })
    //         // Save item(s)
    //         x.save().then(() => res.json({ success: 'Default Items added'}))
    //       }
    //     }
    //   })
      .catch(err => res.status(404).json({ noUserFound: 'User not found!!!!' }))
  })


module.exports = router;