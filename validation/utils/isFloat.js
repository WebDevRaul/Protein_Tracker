const Validator = require('validator');

const isFloatAndMin = value =>
  Validator.isFloat(value) &&
  Validator.isFloat(value, { min: -Infinity, max: -1 });

const isFloatAndMax = value =>
  Validator.isFloat(value) &&
  Validator.isFloat(value, { min: 1001, max: Infinity });

module.exports = { isFloatAndMax, isFloatAndMin }