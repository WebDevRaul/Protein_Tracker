const express = require('express')
const router  = express.Router();
const passport = require('passport');

// Item Model
const Item = require('../../models/Item');


// Validation
const validateItemInput = require('../../validation/item');

// @route   POST api/items
// @desc    Create item
// @access  Private
router
  .post('/', (req, res) => {
    // Validation
    const { errors, isValid } = validateItemInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    // Create the item
    const item = new Item({
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