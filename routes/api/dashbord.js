const express = require('express')
const router  = express.Router();
const passport = require('passport');

// Models
const Table = require('../../models/Table');
const User = require('../../models/User');
const Daily = require('../../models/Daily');

// Validation
const validateSetInput  = require('../../validation/set');


// @route   POST api/dashboard
// @desc    Create & Save item
// @access  Private
router
  .post('/', passport.authenticate('jwt', {session:false}), (req, res) => {
      User.findOne({ _id: req.user._id })
        .then(user => {
          if (user) {
            // Create item
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
            // Save Item to DB
            item.save().then(item => res.json(item));
          }
        })
        .catch(err => res.status(401).json({ noUserFound: 'User not found' }))
      });

// @route   GET api/dashboard
// @desc    Find products by user
// @access  Private
router
  .get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findOne({ _id: req.user._id })
      .then(user => {
        if (user) {
          // Find item
          Table.find({ user: req.params.id })
            .then(item => res.json(item))
            .catch(err => res.status(404).json({ noItemFound: 'No Item found' }));
        }
      })
      .catch(err => res.status(401).json({ noUserFound: 'User not found' }))
  });

// // @route   Delete api/dashboard/:id
// // @desc    Find products by ID
// // @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findOne({ _id: req.user._id })
    .then(user => {
      if (user) {
        Table.findById(req.params.id)
          .then(item => {
            // Check for item owner
            if (item.user.toString() !== req.user.id) {
              return res.status(401).json({ notAuthorized: 'User not authorized' });
            }
            // Delete the item
            item.remove().then(() => res.json({ success: true }));
          })
        .catch(err => res.status(404).json({ noItemFound: 'No Item found' }))
      }
    })
    .catch(err => res.status(404).json({ noUserFound: 'User not found' }))
});

// // @route   Delete api/dashboard/delleteAll/:id
// // @desc    Delete all table items
// // @access  Private
router
  .delete('/deleteAll/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id })
      .then(user => {
        // Check user
        if (user._id.toString() !== req.params.id) {
          return res.status(401).json({ notAuthorized: 'User not authorized' });
        }
        Table.deleteMany({ user: req.params.id })
          .then(() => res.json({ tableRemove: 'Items has been remove' }))
          .catch(err => res.status(404).json({ noItemFound: 'No Item found' }))
          
      })
      .catch(err => res.status(401).json({ noUserFound: 'User not found' }))
  });


// // @route   Edit api/dashboard/edit/:id
// // @desc    Edit item
// // @access  Private
router
  .post('/edit/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id })
      .then(user => {
        const id = req.body.userID;
        // Check user
        if (user._id.toString() !== id) {
          return res.status(401).json({ notAuthorized: 'User not authorized' });
        }
        // Update product by ID
        Table.updateOne(
          { _id: req.params.id },
          { $set:{
            temp_quantity: req.body.newQuantity,
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
          .catch(err => res.status(404).json({ noItemFound: 'No Item found' }))
      })
      .catch(err => res.status(404).json({ noUserFound: 'User not found' }))
  })

// // @route   POST api/dashboard/total/:id
// // @desc    Create item
// // @access  Private
router
  .post('/total/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Validation
    const { errors, isValid } = validateSetInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    User.findById({ _id: req.user._id })
      .then(user => {
        // Check user
        if (user._id.toString() !== req.params.id) {
          return res.status(401).json({ notAuthorized: 'User not authorized' });
        }
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
                    .catch(err => res.status(404).json({ noItemSave: 'Item not save' }))
                }
              )
            } else {
              // Create & save
              item.save().then(item => res.json(item));
            }
          })
          .catch(err => res.status(404).json({ specialError: err }))
      })
      .catch(err => res.status(401).json({ noUserFound: 'User not found' }))
  });

// // @route   GET api/dashboard/collectData/:id
// // @desc    GET item
// // @access  Private
router
  .get('/collectData/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
    User.findOne({ _id: req.user._id })
      .then(user => {
        if (user) {
          Daily.findOne({user: req.params.id})
            .then(item => {
              if (item) {
                res.json(item)
              }
            })
            .catch(err => res.status(404).json({ noData: 'No data found' }))
        }
      })
      .catch(err => res.status(401).json({ noUserFound: 'User not found' }))
  });

module.exports = router;