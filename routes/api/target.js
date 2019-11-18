const express = require('express')
const router  = express.Router();
const passport = require('passport');
const validateDashboardSet = require('../../validation/dashboard_set');
const collectAllData = require('./utils/collectAllData');
const User = require('../../models/User');
const Target = require('../../models/Target');


// @route   POST api/user/table/set
// @desc    Set Target
// @access  Private
router.post('/set', passport.authenticate('jwt'), (req, res) => {
  const { cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  const { errors, isValid } = validateDashboardSet({ cal, prot, fat, carb });

  if (!isValid) return res.status(400).json(errors);
  // Target.findOneAndUpdate({ user: _id },
  //   { 'cal':cal, 'prot':prot, 'fat':fat, 'carb':carb },
  //   ((err, done) => {
  //     if(err) return res.status(400).json({ error: 'Ooops'});
  //     User.findById(_id)
  //       .then(user => {
  //         collectAllData(user)
  //         .then(({ token, payload }) => { res.json({ token: 'Bearer ' + token, ...payload })})
  //         .catch(err => res.status(400).json({ error: 'Ooops'}));
  //       })
  //       .catch(err => res.status(400).json({ error: 'Ooops'}))
  //   })  
  // )
  });

  
// @route   POST api/user/table/calc
// @desc    Set Target
// @access  Private
router.post('/calc', passport.authenticate('jwt'), (req, res) => {
  const { cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  const { errors, isValid } = validateDashboardSet({ cal, prot, fat, carb });

  if (!isValid) return res.status(400).json({ error: 'Unavailable'});

  });


module.exports = router;