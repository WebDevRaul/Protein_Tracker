const express = require('express')
const router  = express.Router();
const passport = require('passport');
const validateItem = require('../../validation/item');
const Admin = require('../../models/Admin');

// @route   GET api/user/admin/update
// @desc    Update
// @access  Private
router.get('/update', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.user;

  Admin.findOne({ user: _id }, { user: 0, _id: 0, __v: 0 })
    .then(({ items }) => res.json(items))
    .catch(err => res.status(400).json({ error: 'Ooops'}))
});


// @route   POST api/user/admin/save-item
// @desc    Save new Item
// @access  Private
router.post('/save-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  const { errors, isValid } = validateItem({ name, qty, type, cal, prot, fat, carb });

  if (!isValid) return res.status(400).json(errors);

  const payload = { name, qty, type, cal, prot, fat, carb }
  Admin.findOneAndUpdate({ user: _id },
    { $push: { 'items': payload }},
    { select: { user: 0, __v: 0, _id: 0 }, new: true, upsert: true  },
    ((err, items) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(items)
    }))
});


// @route   POST api/user/admin/delete-item
// @desc    Delete Item
// @access  Private
router.post('/delete-item', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.body;

  Admin.findOneAndUpdate({ user: req.user._id },
    { $pull: { "items": { _id } } },
    { select: { user: 0, __v: 0, _id: 0, items: 0 }, new: true, upsert: true  },
    ((err, done) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json({ _id })
    }))
});


module.exports = router;