const express = require('express')
const router  = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_OR_KEY } = require('../../config/keys');
const User = require('../../models/User');
const Target = require('../../models/Target');
const Breakfast = require('../../models/Breakfast');
const Lunch = require('../../models/Lunch');
const Dinner = require('../../models/Dinner');
const Snack = require('../../models/Snack');
const Admin = require('../../models/Admin');
const Items = require('./utils/Items');
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
            const target = new Target({ user: _id }).save();
            const breakfast = new Breakfast({ user: _id, title: 'breakfast' }).save();
            const lunch = new Lunch({ user: _id, title: 'lunch' }).save();
            const dinner = new Dinner({ user: _id, title: 'dinner' }).save();
            const snack = new Snack({ user: _id, title: 'snack' }).save();
            const admin = new Admin({ user: _id }).save();
            Promise.all([breakfast, lunch, dinner, snack, target, admin])
              .then(() => {
                Admin.findOne({user: _id})
                  .then(table => {
                    Items.map(i => {
                      table.updateOne(
                        {$push: {'items': i}},
                        ((err, done) => { if(err) return })  
                      )
                    })
                  })
                  .then(success => res.json({ success: true }))
                  .catch(err => res.status(400).json({ error: 'Ooops'}))
              })
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
        const { _id, first_name } = user;
          if(!isMatch) return res.status(400).json(errors);
          const payload = { user: { _id, first_name }, isAuth: true };
          jwt.sign(payload, SECRET_OR_KEY, { expiresIn: 3600 }, (err, token) => {
            res.json({ token: 'Bearer ' + token });
          });
        })
        .catch(err => res.status(400).json(errors));
    })
    .catch(err => res.status(400).json(errors));
});


module.exports = router;