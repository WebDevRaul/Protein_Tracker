const express = require('express')
const router  = express.Router();
const passport = require('passport');

// Item Model
const Item = require('../../models/Item');


// Validate

// @route   POST api/items
// @desc    Create item
// @access  Private
router
  .post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Validation

    // Create the item
    const item = new Item({
      user: req.user.id,
      product_name: req.body.product_name,
      protein: req.body.protein,
      carbohydrates: req.body.carbohydrates,
      fat: req.body.fat,
      calories: req.body.calories
    });

    // Save
    item.save().then(item => res.json(item));
  });



module.exports = router;