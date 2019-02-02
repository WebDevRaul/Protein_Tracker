const express = require('express')
const router  = express.Router();
const passport = require('passport');

// Models
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
      quantity: req.body.quantity,
      type: req.body.type,
      protein: req.body.protein,
      calories: req.body.calories,
      carbohydrates: req.body.carbohydrates,
      fat: req.body.fat
    });

    // Save
    item.save().then(item => res.json(item));
  });

// @route   GET api/dashboard
// @desc    Find products by user
// @access  Private
router
  .get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Table.find({ user: req.user.id })
    .then(prod => res.json(prod))
    .catch(err => res.status(404).json({ noProductsFound: 'No products found' }));
  });


module.exports = router;