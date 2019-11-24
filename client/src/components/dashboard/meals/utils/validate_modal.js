import Validator from 'validator';
import isEmpty from '../../../common/utils/isEmpty';

const validateModal = val => {
  let errors = {};

  val = !isEmpty(val) ? val : '';

  
  // Validate Only Numbers
  if (!Validator.isNumeric(val)) errors.qty = 'Only numbers allowed';
  
  // Validate Min/Max
  if (Validator.isInt(val, {min:-Infinity, max:0}))  errors.qty = 'Minimum QTY required is 1';
  
  if (Validator.isInt(val, {min:1000, max: Infinity})) errors.qty = 'Miximum QTY required is 1000';
  
  // Validate Empty
  if (Validator.isEmpty(val)) errors.qty = 'Field is required';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateModal;