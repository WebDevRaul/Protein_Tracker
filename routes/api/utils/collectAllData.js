const jwt = require('jsonwebtoken');
const { SECRET_OR_KEY } = require('../../../config/keys');
const Target = require('../../../models/Target');
const Breakfast = require('../../../models/Breakfast');
const Lunch = require('../../../models/Lunch');
const Diner = require('../../../models/Diner');
const Snack = require('../../../models/Snack');

module.exports = function validateItemInput({ _id, first_name }) {
  return new Promise((resolve, reject) => {
    Target.findOne({ user: _id })
      .select({ '_id': 0, '__v': 0, 'user': 0 })
      .then(target => {
        Breakfast.findOne({ user: _id })
        .select({ '_id': 0, '__v': 0, 'user': 0 })
        .then(breakfast => {
          Lunch.findOne({ user: _id })
            .select({ '_id': 0, '__v': 0, 'user': 0 })
            .then(lunch => {
              Diner.findOne({ user: _id })
                .select({ '_id': 0, '__v': 0, 'user': 0 })
                .then(diner => {
                  Snack.findOne({ user: _id })
                    .select({ '_id': 0, '__v': 0, 'user': 0 })
                    .then(snack => {
                      const payload = { info: { _id, first_name },
                        target, breakfast, lunch, diner, snack, isAuth: true }
                      jwt.sign(payload, SECRET_OR_KEY, { expiresIn: 3600 }, (err, token) => {
                        if(err) reject;
                        resolve({ token, payload });
                      });
                    })
                })
            })
        })
    })
  })
};