const express = require('express')
const router  = express.Router();
const passport = require('passport');
const validateAdminForm = require('../../validation/admin_form');
const Admin = require('../../models/Admin');
const Items = require('./utils/Items');

// @route   GET api/user/admin/update
// @desc    Update
// @access  Private
router.get('/update', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.user;

  Admin.findOne({ user: _id }, { user: 0, _id: 0, __v: 0 })
    .then(table => {
      if(table) return res.json(table.items);
      // Save default items
      const payload = new Admin({ user: _id })
      payload.save()
        .then(table => {
          Items.map(i => {
            table.updateOne(
              {$push: {'items': i}},
              ((err, done) => { if(err) return })  
            )
          })
        })
        .then(() => {
          Admin.findOne({user: _id})
            .then(table => res.json(table))
            .catch(err => res.status(400).json({ error: 'Ooops'}))
        })
        .catch(err => res.status(400).json({ error: 'Ooops'}))

    })
    .catch(err => res.status(400).json({ error: 'Ooops'}))
});


// @route   POST api/user/admin/save-item
// @desc    Save new Item
// @access  Private
router.post('/save-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  // Validate
  const { errors, isValid } = validateAdminForm({ name, qty, type, cal, prot, fat, carb });
  if (!isValid) return res.status(400).json(errors);
  const payload = { name, qty, type, cal, prot, fat, carb }

  Admin.findOneAndUpdate({ user: _id }, 
    { $push: { 'items': payload }},
    { new: true, upsert:true },
    ((err, list) => {
      if(err) return res.status(400).json(errors);
      console.log(list)
    }))
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