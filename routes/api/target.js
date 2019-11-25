const express = require('express')
const router  = express.Router();
const passport = require('passport');
const validateDashboardSet = require('../../validation/dashboard_set');
const Target = require('../../models/Target');

// @route   GET api/user/table/update
// @desc    Update
// @access  Private
router.get('/update', passport.authenticate('jwt'), (req, res) => {
  const { _id } = req.user;

  Target.findOne({ user: _id }, { user: 0, _id: 0, __v: 0 })
    .then(data => res.json(data))
    .catch(err => res.status(400).json({ error: 'Ooops'}))
});


// @route   POST api/user/table/set
// @desc    Set Target
// @access  Private
router.post('/set', passport.authenticate('jwt'), (req, res) => {
  const { cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  const { errors, isValid } = validateDashboardSet({ cal, prot, fat, carb });
  
  if (!isValid) return res.status(400).json(errors);

  Target.findOneAndUpdate({ user: _id },
    { $set: { cal, prot, fat, carb }},
    { select: { user: 0, __v: 0, _id: 0 }, new: true, upsert: true  },
    ((err, data) => {
      if(err) return res.status(400).json({ error: 'Ooops'})
      res.json(data)
    }))
  });


module.exports = router;