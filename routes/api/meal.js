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


////////////////////////////////////////////////////
////////////////////  ADD ITEM  ////////////////////
////////////////////////////////////////////////////


// @route   POST api/user/meal/Breakfast/add-item
// @desc    Add Item
// @access  Private
router.post('/Breakfast/add-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb, p } = req.body;
  const { _id } = req.user;
  // Validate here
  const payload = { name, qty, type, cal, prot, fat, p, carb, _cal: cal, _prot: prot, _fat: fat, _carb: carb }
  Breakfast.findOneAndUpdate({ user: _id },
    { $push: { 'items': payload }},
    { select: { user: 0, __v: 0, _id: 0, title: 0 }, new: true, upsert: true  },
    ((err, items) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(items)
    }))
});

// @route   POST api/user/meal/Lunch/add-item
// @desc    Add Item
// @access  Private
router.post('/Lunch/add-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb, p } = req.body;
  const { _id } = req.user;
  // Validate here
  const payload = { name, qty, type, cal, prot, fat, carb, p, _cal: cal, _prot: prot, _fat: fat, _carb: carb }
  Lunch.findOneAndUpdate({ user: _id },
    { $push: { 'items': payload }},
    { select: { user: 0, __v: 0, _id: 0, title: 0 }, new: true, upsert: true  },
    ((err, items) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(items)
    }))
});

// @route   POST api/user/meal/Diner/add-item
// @desc    Add Item
// @access  Private
router.post('/Diner/add-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb, p } = req.body;
  const { _id } = req.user;
  // Validate here
  const payload = { name, qty, type, cal, prot, fat, carb, p, _cal: cal, _prot: prot, _fat: fat, _carb: carb }
  Diner.findOneAndUpdate({ user: _id },
    { $push: { 'items': payload }},
    { select: { user: 0, __v: 0, _id: 0, title: 0 }, new: true, upsert: true  },
    ((err, items) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(items)
    }))
});

// @route   POST api/user/meal/Snack/add-item
// @desc    Add Item
// @access  Private
router.post('/Snack/add-item', passport.authenticate('jwt'), (req, res) => {
  const { name, qty, type, cal, prot, fat, carb, p } = req.body;
  const { _id } = req.user;
  // Validate here
  const payload = { name, qty, type, cal, prot, fat, p, carb, _cal: cal, _prot: prot, _fat: fat, _carb: carb }
  Snack.findOneAndUpdate({ user: _id },
    { $push: { 'items': payload }},
    { select: { user: 0, __v: 0, _id: 0, title: 0 }, new: true, upsert: true  },
    ((err, items) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(items)
    }))
});


///////////////////////////////////////////////////////
////////////////////  UPDATE ITEM  ////////////////////
///////////////////////////////////////////////////////


// @route   POST api/user/meal/Breakfast/update-item
// @desc    Update Item
// @access  Private
router.post('/Breakfast/update-item', passport.authenticate('jwt'), (req, res) => {
  const { _id, qty, cal, prot, fat, carb } = req.body;

  Breakfast.findOneAndUpdate({ user: req.user._id, 'items._id': req.body._id },
  {$set: { 'items.$.qty': qty, 'items.$.cal': cal, 'items.$.prot': prot, 'items.$.fat': fat, 'items.$.carb': carb }},
  { select: { user: 0, __v: 0, _id: 0, title: 0, items: {$elemMatch:{ _id }}}, new: true, upsert: true  },
  ((err, item) => {
    if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(item)
  }))
});

// @route   POST api/user/meal/Lunch/update-item
// @desc    Update Item
// @access  Private
router.post('/Lunch/update-item', passport.authenticate('jwt'), (req, res) => {
  const { _id, qty, cal, prot, fat, carb } = req.body;

  Lunch.findOneAndUpdate({ user: req.user._id, 'items._id': req.body._id },
  {$set: { 'items.$.qty': qty, 'items.$.cal': cal, 'items.$.prot': prot, 'items.$.fat': fat, 'items.$.carb': carb }},
  { select: { user: 0, __v: 0, _id: 0, title: 0, items: {$elemMatch:{ _id }}}, new: true, upsert: true  },
  ((err, item) => {
    if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(item)
  }))
});

// @route   POST api/user/meal/Diner/update-item
// @desc    Update Item
// @access  Private
router.post('/Diner/update-item', passport.authenticate('jwt'), (req, res) => {
  const { _id, qty, cal, prot, fat, carb } = req.body;

  Diner.findOneAndUpdate({ user: req.user._id, 'items._id': req.body._id },
  {$set: { 'items.$.qty': qty, 'items.$.cal': cal, 'items.$.prot': prot, 'items.$.fat': fat, 'items.$.carb': carb }},
  { select: { user: 0, __v: 0, _id: 0, title: 0, items: {$elemMatch:{ _id }}}, new: true, upsert: true  },
  ((err, item) => {
    if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(item)
  }))
});

// @route   POST api/user/meal/Snack/update-item
// @desc    Update Item
// @access  Private
router.post('/Snack/update-item', passport.authenticate('jwt'), (req, res) => {
  const { _id, qty, cal, prot, fat, carb } = req.body;

  Snack.findOneAndUpdate({ user: req.user._id, 'items._id': req.body._id },
  {$set: { 'items.$.qty': qty, 'items.$.cal': cal, 'items.$.prot': prot, 'items.$.fat': fat, 'items.$.carb': carb }},
  { select: { user: 0, __v: 0, _id: 0, title: 0, items: {$elemMatch:{ _id }}}, new: true, upsert: true  },
  ((err, item) => {
    if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(item)
  }))
});


///////////////////////////////////////////////////////
////////////////////  DELETE ITEM  ////////////////////
///////////////////////////////////////////////////////


// @route   POST api/user/meal/Breakfast/delete-item
// @desc    Delete Item
// @access  Private
router.post('/Breakfast/delete-item', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.body;

  Breakfast.findOneAndUpdate({ user: req.user._id },
    { $pull: { "items": { _id } } },
    { select: { user: 0, __v: 0, _id: 0, title: 0, items: 0},  new: true, upsert: true  },
    ((err, done) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json({ _id })
    }))
});

// @route   POST api/user/meal/Lunch/delete-item
// @desc    Delete Item
// @access  Private
router.post('/Lunch/delete-item', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.body;

  Lunch.findOneAndUpdate({ user: req.user._id },
    { $pull: { "items": { _id } } },
    { select: { user: 0, __v: 0, _id: 0, title: 0, items: 0},  new: true, upsert: true  },
    ((err, done) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json({ _id })
    }))
});

// @route   POST api/user/meal/Diner/delete-item
// @desc    Delete Item
// @access  Private
router.post('/Diner/delete-item', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.body;

  Diner.findOneAndUpdate({ user: req.user._id },
    { $pull: { "items": { _id } } },
    { select: { user: 0, __v: 0, _id: 0, title: 0, items: 0},  new: true, upsert: true  },
    ((err, done) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json({ _id })
    }))
});

// @route   POST api/user/meal/Snack/delete-item
// @desc    Delete Item
// @access  Private
router.post('/Snack/delete-item', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.body;

  Snack.findOneAndUpdate({ user: req.user._id },
    { $pull: { "items": { _id } } },
    { select: { user: 0, __v: 0, _id: 0, title: 0, items: 0},  new: true, upsert: true  },
    ((err, done) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json({ _id })
    }))
});



module.exports = router;