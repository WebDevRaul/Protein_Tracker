const express = require('express')
const router  = express.Router();
const passport = require('passport');

// Item Model
const Item = require('../../models/Item');
const User = require('../../models/User');


// Validation
const validateItemInput = require('../../validation/admin');


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
      quantity: req.body.quantity,
      type: req.body.type,
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
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findOne({ user: req.user.id }).then(user => {
      Item.findById(req.params.id)
        .then(item => {
          // Check for item owner
          if (item.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }

          // Delete
          item.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: 'No product found' }));
    });
  }
);




module.exports = router;