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

});


module.exports = router;