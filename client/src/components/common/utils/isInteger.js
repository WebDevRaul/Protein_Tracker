import Validator from 'validator';

const isIntAndMin = value =>
  Validator.isInt(value) &&
  Validator.isInt(value, { min: -Infinity, max: -1 });

const isIntAndMax = value =>
  Validator.isInt(value) &&
  Validator.isInt(value, { min: 1001, max: Infinity });

const isIntAndMinOne = value =>
  Validator.isInt(value) &&
  Validator.isInt(value, { min: -Infinity, max: 0.1 });

const isIntAndMaxT = value =>
  Validator.isInt(value) &&
  Validator.isInt(value, { min: 10001, max: Infinity });

export { isIntAndMax, isIntAndMin, isIntAndMinOne, isIntAndMaxT }