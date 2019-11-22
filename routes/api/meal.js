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
router.post('/BREAKFAST/add-item', passport.authenticate('jwt'), (req, res) => {
  const { DATA, TABLE } = req.body;
  const { _id } = req.user;
  // Validate here
});

// @route   POST api/user/meal/LUNCH/add-item
// @desc    Add Item
// @access  Private
router.post('/LUNCH/add-item', passport.authenticate('jwt'), (req, res) => {
  const { DATA, TABLE } = req.body;
  const { _id } = req.user;
  console.log(TABLE)
});


module.exports = router;