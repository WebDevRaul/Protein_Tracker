const express = require('express')
const router  = express.Router();
const bcrypt = require('bcryptjs');
const collectAllData = require('./utils/collectAllData');
const User = require('../../models/User');
const Target = require('../../models/Target');
const Breakfast = require('../../models/Breakfast');
const Lunch = require('../../models/Lunch');
const Diner = require('../../models/Diner');
const Snack = require('../../models/Snack');
const validateRegister = require('../../validation/register');
const validateSignIn = require('../../validation/sign_in');


// @route   POST api/user/account/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { first_name, last_name, email, password, password2 } = req.body;
  const { errors, isValid } = validateRegister({ first_name, last_name, email, password, password2 });

  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email })
    .then(user => {
      errors.email = 'This E-Mail is already taken';
      if(user) return res.status(409).json(errors);
      const newUser = new User({ first_name, last_name, email, password });

      bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(({ _id }) => {
              const one = new Target({ user: _id }).save();
              const two = new Breakfast({ user: _id }).save();
              const tree = new Lunch({ user: _id }).save();
              const four = new Diner({ user: _id }).save();
              const five = new Snack({ user: _id }).save();
              Promise.all([ one, two, tree, four, five ])
                .then(() => res.json({ success: true }))
                .catch(err => res.status(400).json({ error: 'Ooops'}))
            })
            .catch(err => res.status(400).json({ error: 'Ooops'}))
        });
      });
    })
    .catch(err => res.status(400).json({ error: 'Ooops'}));
});


// @route   POST api/user/account/sign-in
// @desc    Sign in user
// @access  Public
router.post('/sign-in', (req, res) => {
  const { email, password } = req.body;
  const { errors, isValid } = validateSignIn({ email, password });

  if (!isValid) return res.status(400).json(errors);
  errors.emailOrPassword='Invalid E-Mail or Password';
  
  User.findOne({ email })
    .then(user => {
      if(!user) return res.status(400).json(errors);

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json(errors);
          collectAllData(user)
          .then(({ token }) => { res.json({ token: 'Bearer ' + token })})
          .catch(err => res.status(400).json(errors));
        })
        .catch(err => res.status(400).json(errors));
    })
    .catch(err => res.status(400).json(errors));
});


module.exports = router;