import Validator from 'validator';
import isEmpty from '../utils/isEmpty';

const validateProductQty = data => {
  let errors = {};

  data = !isEmpty(data) ? data : '';

  // Validate Empty
  if (Validator.isEmpty(data)) {
    errors.productQty = 'Qty. field is required'
  }

  // Validate Float
  if ((!Validator.isFloat(data, {min:0, max: 1001})) && (!Validator.isInt(data))) {
    errors.productQty = 'Enter a valid Qty.';
  } else if(!Validator.isFloat(data, {min:0, max:1000})&&(Validator.isInt(data, {min:-Infinity, max:0}))) {
    errors.productQty = 'Minimum Qty. is 1'
  } else if(!Validator.isFloat(data, {min:0, max:1000})&&(!Validator.isInt(data, {min:0, max: 1000}))) {
    errors.productQty = 'Maximum Qty. is 1000'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateProductQty;