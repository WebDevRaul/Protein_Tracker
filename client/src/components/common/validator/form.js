import Validator from 'validator';
import isEmpty from '../isEmpty';

const validateFormInput = (data) => {
  let errors = [];

  data.age = !isEmpty(data.age) ? data.age : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.activity = !isEmpty(data.activity) ? data.activity : '';
  data.height = !isEmpty(data.height) ? data.height : '';
  data.weight = !isEmpty(data.weight) ? data.weight : '';

  // Validate Empty
  if (Validator.isEmpty(data.age)) {
    errors.age = 'Age field is required'
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required'
  }
  if (Validator.isEmpty(data.activity)) {
    errors.activity = 'Activity field is required'
  }
  if (Validator.isEmpty(data.height)) {
    errors.height = 'Height field is required'
  }
  if (Validator.isEmpty(data.weight)) {
    errors.weight = 'Weight field is required'
  }

  // Validate Numbers
  if (!Validator.isNumeric(data.age)) {
    errors.age = 'Only numbers allowed'
  }
  if (!Validator.isNumeric(data.height)) {
    errors.height = 'Only numbers allowed'
  }
  if (!Validator.isNumeric(data.weight)) {
    errors.weight = 'Only numbers allowed'
  }

  // Validate Age
  if (!Validator.isInt(data.age, {min:18, max:99})) {
    errors.age = 'Miximum age required is 99';
  }
  if (Validator.isInt(data.age, {min:-Infinity, max:17},{allow_leading_zeroes: false})) {
    errors.age = 'Minimum age required is 18';
  }

  // Validate Height
  if (!Validator.isInt(data.height, {min:57, max:272})) {
    errors.height = 'Miximum height required is 272';
  }
  if (!Validator.isInt(data.height, {min:-Infinity, max:57})) {
    errors.height = 'Miximum height required is 272';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateFormInput;