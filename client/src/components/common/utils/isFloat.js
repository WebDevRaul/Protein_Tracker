import Validator from 'validator';

const isFloatAndMin = value =>
  Validator.isFloat(value) &&
  Validator.isFloat(value, { min: -Infinity, max: 0 });

const isFloatAndMax = value =>
  Validator.isFloat(value) &&
  Validator.isFloat(value, { min: 1000, max: Infinity });

export { isFloatAndMax, isFloatAndMin }