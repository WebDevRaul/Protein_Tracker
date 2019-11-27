import Validator from 'validator';
import isEmpty from '../../../../common/utils/isEmpty';
import { isValidNumber, isIntAndNoLeadingZero } from '../../../../common/utils/isNumber';

const validateCalc = ({ age, gender, activity, height, weight }) => {
  let errors = [];

  age = !isEmpty(age) ? age : '';
  gender = !isEmpty(gender) ? gender : '';
  activity = !isEmpty(activity) ? activity : '';
  height = !isEmpty(height) ? height : '';
  weight = !isEmpty(weight) ? weight : '';


  // Validate Age
  if(Validator.isInt(age, {min:-Infinity, max:17})) errors.age = 'Minimum age must be 18';
  if(Validator.isInt(age, {min:100, max:Infinity})) errors.age = 'Miximum age required is 99';
  if(!Validator.isInt(age)) errors.age = 'No decimals allowed';
  if(isIntAndNoLeadingZero(age)) errors.age = 'Enter a valid number';
  if(isValidNumber(age)) errors.age = 'Enter a valid number';
  
  // Validate Height
  if(Validator.isInt(height, {min:-Infinity, max:0})) errors.height = 'Minimum height required is 1';
  if(Validator.isInt(height, {min:301, max: Infinity})) errors.height = 'Miximum height required is 300';
  if(!Validator.isInt(height)) errors.height = 'No decimals allowed';
  if(isIntAndNoLeadingZero(height)) errors.height = 'Enter a valid number';
  if(isValidNumber(height)) errors.height = 'Enter a valid number';
  
  // Validate Weight
  if(Validator.isInt(weight, {min:-Infinity, max:0})) errors.weight = 'Minimum weight required is 1';
  if(Validator.isInt(weight, {min:1001, max: Infinity})) errors.weight = 'Miximum weight required is 1000';
  if(!Validator.isInt(weight)) errors.weight = 'No decimals allowed';
  if(isIntAndNoLeadingZero(weight)) errors.weight = 'Enter a valid number';
  if(isValidNumber(weight)) errors.weight = 'Enter a valid number';

  // Validate Numbers
  if(!Validator.isNumeric(age)) errors.age = 'No characters allowed';
  if(!Validator.isNumeric(height)) errors.height = 'No characters allowed';
  if(!Validator.isNumeric(weight)) errors.weight = 'No characters allowed';

  // Validate Empty
  if(Validator.isEmpty(age)) errors.age = 'Age field is required';
  if(Validator.isEmpty(gender)) errors.gender = 'Gender field is required';
  if(Validator.isEmpty(activity)) errors.activity = 'Activity field is required';
  if(Validator.isEmpty(height)) errors.height = 'Height field is required';
  if(Validator.isEmpty(weight)) errors.weight = 'Weight field is required';
  

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateCalc;