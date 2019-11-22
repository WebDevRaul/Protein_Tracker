const express = require('express')
const router  = express.Router();
const passport = require('passport');

// @route   GET api/user/meal/update
// @desc    Update
// @access  Private
router.get('/update', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.user;

});


// @route   POST api/user/meal/BREAKFAST/add-item
// @desc    Add Item
// @access  Private
router.post('/BREAKFAST/add-item', passport.authenticate('jwt'), (req, res) => {
  const { DATA, TABLE } = req.body;
  const { _id } = req.user;
  console.log(TABLE)
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