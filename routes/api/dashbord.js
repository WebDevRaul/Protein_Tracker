const express = require('express')
const router  = express.Router();
const passport = require('passport');

// Item Model
const Table = require('../../models/Table');

// @route   POST api/dashboard
// @desc    Save item
// @access  Private
router
  .post('/', passport.authenticate('jwt', {session:false}), (req, res) => {
    // Make Validation

    const item = new Table({
      table_id: req.body.table_id,
      user: req.body.user,
      product_name: req.body.product_name,
      protein: req.body.protein,
      calories: req.body.calories,
      carbohydrates: req.body.carbohydrates,
      fat: req.body.fat
    });

    // Save
    item.save().then(item => res.json(item));
  });


module.exports = router;