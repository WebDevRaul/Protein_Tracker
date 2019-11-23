const express = require('express')
const router  = express.Router();
const passport = require('passport');
const Breakfast = require('../../models/Breakfast');
const Lunch = require('../../models/Lunch');
const Diner = require('../../models/Diner');
const Snack = require('../../models/Snack');

// @route   GET api/user/meal/update
// @desc    Update
// @access  Private
router.get('/update', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.user;
  
  const breakfast = Breakfast.findOne({ user: _id }, { user: 0, _id: 0, __v: 0 })
  const lunch = Lunch.findOne({ user: _id }, { user: 0, _id: 0, __v: 0 })
  const diner = Diner.findOne({ user: _id }, { user: 0, _id: 0, __v: 0 })
  const snack = Snack.findOne({ user: _id }, { user: 0, _id: 0, __v: 0 })

  Promise.all([breakfast, lunch, diner, snack])
    .then(tables => res.json(tables))
    .catch(err => res.status(400).json({ error: 'Ooops'}))

});


// @route   POST api/user/meal/BREAKFAST/add-item
// @desc    Add Item
// @access  Private
router.post('/Breakfast/add-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  // Validate here
  const payload = { name, qty, type, cal, prot, fat, carb }
  Breakfast.findOneAndUpdate({ user: _id },
    { $push: { 'items': payload }},
    { select: { user: 0, __v: 0, _id: 0, title: 0 }, new: true, upsert: true  },
    ((err, items) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(items)
    }))
});

// @route   POST api/user/meal/LUNCH/add-item
// @desc    Add Item
// @access  Private
router.post('/Lunch/add-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  // Validate here
  const payload = { name, qty, type, cal, prot, fat, carb }
  Lunch.findOneAndUpdate({ user: _id },
    { $push: { 'items': payload }},
    { select: { user: 0, __v: 0, _id: 0, title: 0 }, new: true, upsert: true  },
    ((err, items) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(items)
    }))
});

// @route   POST api/user/meal/DINER/add-item
// @desc    Add Item
// @access  Private
router.post('/Diner/add-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  // Validate here
  const payload = { name, qty, type, cal, prot, fat, carb }
  Diner.findOneAndUpdate({ user: _id },
    { $push: { 'items': payload }},
    { select: { user: 0, __v: 0, _id: 0, title: 0 }, new: true, upsert: true  },
    ((err, items) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(items)
    }))
});

// @route   POST api/user/meal/SNACK/add-item
// @desc    Add Item
// @access  Private
router.post('/Snack/add-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  // Validate here
  const payload = { name, qty, type, cal, prot, fat, carb }
  Snack.findOneAndUpdate({ user: _id },
    { $push: { 'items': payload }},
    { select: { user: 0, __v: 0, _id: 0, title: 0 }, new: true, upsert: true  },
    ((err, items) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(items)
    }))
});


////////////////////////////////////////////////////////
///////////////////////


// @route   POST api/user/meal/BREAKFAST/update-item
// @desc    Update Item
// @access  Private
router.post('/Breakfast/update-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  console.log(req.body)
});


module.exports = router;