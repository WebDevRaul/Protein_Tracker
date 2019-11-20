const express = require('express')
const router  = express.Router();
const passport = require('passport');
const validateDashboardSet = require('../../validation/dashboard_set');
const Target = require('../../models/Target');


// @route   POST api/user/table/set
// @desc    Set Target
// @access  Private
router.post('/set', passport.authenticate('jwt'), (req, res) => {
  const { cal, prot, fat, carb } = req.body;
  const { _id } = req.user;
  // Validation
  const { errors, isValid } = validateDashboardSet({ cal, prot, fat, carb });
  if (!isValid) return res.status(400).json(errors);

  Target.findOne({ user: _id })
    .then(data => {
      if(data) {

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