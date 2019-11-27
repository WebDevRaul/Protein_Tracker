const Validator = require('validator');

const isIntAndNoLeadingZero = value =>
  Validator.isInt(value) &&
    (Validator.isLength(value, { min:2 }) &&
    !Validator.isInt(value, { allow_leading_zeroes: false }));

const isValidNumber = value =>
  value.includes('+') ||
  value.includes('-');

module.exports = { isValidNumber, isIntAndNoLeadingZero }