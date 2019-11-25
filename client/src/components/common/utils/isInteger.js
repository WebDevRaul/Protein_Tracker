import Validator from 'validator';

const isIntAndMax = value =>
  Validator.isInt(value) &&
  Validator.isInt(value, { min: 1001, max: Infinity });
  
  
const isIntAndMin = value =>
  Validator.isInt(value) &&
  Validator.isInt(value, { min: -Infinity, max: 0 });
  

export { isIntAndMax, isIntAndMin }