import Validator from 'validator';
import isEmpty from '../utils/isEmpty';

const validateFormInput = data => {
  let errors = [];

  data.age = !isEmpty(data.age) ? data.age : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.activity = !isEmpty(data.activity) ? data.activity : '';
  data.height = !isEmpty(data.height) ? data.height : '';
  data.weight = !isEmpty(data.weight) ? data.weight : '';


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
  if (Validator.isInt(data.age, {min:-Infinity, max:17})) {
    errors.age = 'Minimum age must be 18';
  }
  if (Validator.isInt(data.age, {min:100, max:Infinity})) {
    errors.age = 'Miximum age required is 99';
  }
  // Validate Height
  if (Validator.isInt(data.height, {min:-Infinity, max:0})) {
    errors.height = 'Minimum height required is 1';
  }
  if (Validator.isInt(data.height, {min:301, max: Infinity})) {
    errors.height = 'Miximum height required is 300';
  }
  // Validate Weight
  if (Validator.isInt(data.weight, {min:-Infinity, max:0})) {
    errors.weight = 'Minimum weight required is 1';
  }
  if (Validator.isInt(data.weight, {min:1001, max: Infinity})) {
    errors.weight = 'Miximum weight required is 1000';
  }



  // Validate allow_leading_zeroes: false
  if (!Validator.isInt(data.age, {allow_leading_zeroes: false})) {
    errors.age = 'Only valid numbers allowed';
  }
  if (!Validator.isInt(data.height, {allow_leading_zeroes: false})) {
    errors.height = 'Only valid numbers allowed';
  }
  if (!Validator.isInt(data.weight, {allow_leading_zeroes: false})) {
    errors.weight = 'Only valid numbers allowed';
  }



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

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateFormInput;