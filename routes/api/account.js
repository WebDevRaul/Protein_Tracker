const express = require('express')
const router  = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const validateRegister = require('../../validation/register');


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
            .then(() => res.json({ success: true }))
            .catch(err => res.status(400).json({ error: 'Ooops'}))
        });
      });
    })
    .catch(err => res.status(400).json({ error: 'Ooops'}));
});


module.exports = router;