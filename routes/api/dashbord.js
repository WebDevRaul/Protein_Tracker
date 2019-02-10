const express = require('express')
const router  = express.Router();
const passport = require('passport');

// Models
const Table = require('../../models/Table');
const User = require('../../models/User');
const Daily = require('../../models/Daily');


// @route   POST api/dashboard
// @desc    Save item
// @access  Private
router
  .post('/', passport.authenticate('jwt', {session:false}), (req, res) => {
    // Make Validation

    const item = new Table({
      user: req.body.user,
      product_name: req.body.product_name,
      quantity: req.body.quantity,
      type: req.body.type,
      protein: req.body.protein,
      calories: req.body.calories,
      carbohydrates: req.body.carbohydrates,
      fat: req.body.fat,
      table_id: req.body.table_id,
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

// @route   Delete api/dashboard/:id
// @desc    Find products by ID
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findOne({ user: req.user.id }).then(user => {
    Table.findById(req.params.id)
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

// @route   Delete api/dashboard/:id
// @desc    Delete all table items
// @access  Private
router
  .delete('/deleteAll/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id })
      .then(user => {
        // Check for item owner
        if (user._id.toString() !== req.user.id) {
          return res
            .status(401)
            .json({ notauthorized: 'User not authorized' });
        }
        // Clear table
        Table.deleteMany({ user: req.user.id })
          .then(item => res.json({ tableRemove: 'Items has been remove' }))
          .catch(err => res.status(404).json({ noTablefound: 'No Items Found' }))
      })
      .catch(err => res.status(404).json({ noTablefound: 'No Table Found' }))
  });


// @route   Edit api/dashboard/edit/:id
// @desc    Edit item
// @access  Private
router
  .post('/edit/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id })
      .then(user => {
        // Check for item owner
        if (user._id.toString() !== req.user.id) {
          return res
            .status(401)
            .json({ notauthorized: 'User not authorized' });
        }

        // Update product by ID
        Table.updateOne(
          { _id: req.params.id },
          { $set:{
            quantity: req.body.newQuantity,
            temp_calories: req.body.newCalories,
            temp_protein: req.body.newProtein,
            temp_fat: req.body.newFat,
            temp_carbohydrates: req.body.newCarbohydrates
          } },
          { new: true },
          () => {
            Table.findById(req.params.id)
                .then(item => res.json(item))
          }
        )
          .catch(err => res.status(404).json({ noProductFound: 'No product found' }))
      })
      .catch(err => res.status(404).json({ notauthorized: 'User not authorized' }))
  })

// @route   POST api/dashboard/dailyTarget
// @desc    Create item
// @access  Private
router
  .post('/dailyTarget', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id })
      .then(user => {
        // Create item
        const item = new Daily({
          user: req.user._id,
          calories: req.body.calories,
          protein: req.body.protein,
          fat: req.body.fat,
          carbohydrates: req.body.carbohydrates
        });
    
        // Check if exists
        Daily.findOne({ user: req.user._id })
          .then(table => {
            if (table) {
              // Update
              Daily.updateOne(
                {user: req.user._id},
                {$set:{
                  calories: req.body.calories,
                  protein: req.body.protein,
                  fat: req.body.fat,
                  carbohydrates: req.body.carbohydrates
                }},
                {new: true},
                () => {
                  Daily.findOne({ user: req.user._id })
                    .then(item => res.json(item))
                    .catch(err => res.status(404).json({ noItemSave: 'No item save' }))
                }
              )
            } else {
              // Create & save
              item.save().then(item => res.json(item));
            }
          })
      })
      .catch(err => res.status(404).json({ notauthorized: 'User not authorized' }))
  });


module.exports = router;