const express = require('express')
const router  = express.Router();
const passport = require('passport');

// Item Model
const Item = require('../../models/Item');
const User = require('../../models/User');


// Validation
const validateItemInput = require('../../validation/item');


// @route   POST api/items
// @desc    Create item
// @access  Private
router
  .post('/', passport.authenticate('jwt'), (req, res) => {
    // Validation
    const { errors, isValid } = validateItemInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    // Create the item
    const item = new Item({
      user: req.body.user,
      product_name: req.body.product_name,
      protein: req.body.protein,
      carbohydrates: req.body.carbohydrates,
      fat: req.body.fat,
      calories: req.body.calories
    });

    // Save
    item.save().then(item => res.json(item));
  });


// @route   GET api/items
// @desc    Get items by user
// @access  Private
router
.get('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    Item.find({ user: req.user.id })
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noItemFound: 'No products found' }));
  });

// @route   DELETE api/item/:id
// @desc    Delete item by id
// @access  Private
router
  .delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Item.findById(req.params.id)
      .then(item => {
        item.remove()
            .then(Item.find({ user: req.user.id })
              .then(items => res.json(items))
              .catch(err => res.status(404).json({ noItemFound: 'No products found' }))
            )
      })
      .catch(err => res.status(404).json({ ItemNotFound: 'No Produc found' }));
  });




module.exports = router;