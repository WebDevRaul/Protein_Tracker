const express = require('express')
const router  = express.Router();
const passport = require('passport');
const validateAdminForm = require('../../validation/admin_form');


// @route   POST api/user/admin/save-item
// @desc    Save new Item
// @access  Private
router.post('/save-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  const { errors, isValid } = validateAdminForm({ name, qty, type, cal, prot, fat, carb });

  if (!isValid) return res.status(400).json(errors);
});


// @route   POST api/user/admin/delete-item
// @desc    Delete Item
// @access  Private
router.post('/delete-item', passport.authenticate('jwt'), (req, res) => {
  const { id} = req.body;
  const { _id } = req.user;

  console.log(id)
});


module.exports = router;