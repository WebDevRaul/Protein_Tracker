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
    .then(table => {
      if(table) return res.json(table);
      // Fake data
      res.json({ cal: '0', prot: '0', fat: '0', carb: '0' })
    })
    .catch(err => res.status(400).json({ error: 'Ooops'}))
  });


// @route   POST api/user/table/set
// @desc    Set Target
// @access  Private
router.post('/set', passport.authenticate('jwt'), (req, res) => {
  const { cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  // Validation
  const { errors, isValid } = validateDashboardSet({ cal, prot, fat, carb });
  if (!isValid) return res.status(400).json(errors);

  Target.findOne({ user: _id }, { user: 0, __v: 0 })
    .then(table => {
      if(table) {
        table.updateOne({cal, prot, fat, carb}, ((err, { nModified }) => {
          if(err) return res.status(400).json({ error: 'Ooops'});
          if(nModified) return res.json({ cal, prot, fat, carb });
          res.status(400).json({ error: 'nModified: 0'});
        }))
      }
      else {
        const payload = new Target({ user: _id, cal, prot, fat, carb });
        payload.save()
          .then(({ cal, prot, fat, carb }) => res.json({ cal, prot, fat, carb }))
          .catch(err => res.status(400).json({ error: 'Ooops'}))
      }
    })
    .catch(err => res.status(400).json({ error: 'Ooops'}))
  });


module.exports = router;