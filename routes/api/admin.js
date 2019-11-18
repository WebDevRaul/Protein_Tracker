const express = require('express')
const router  = express.Router();
const passport = require('passport');
const validateAdminForm = require('../../validation/admin_form');


// @route   POST api/user/admin/form
// @desc    Save new Item
// @access  Private
router.post('/form', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  const { errors, isValid } = validateAdminForm({ name, qty, type, cal, prot, fat, carb });

  if (!isValid) return res.status(400).json(errors);
});


module.exports = router;