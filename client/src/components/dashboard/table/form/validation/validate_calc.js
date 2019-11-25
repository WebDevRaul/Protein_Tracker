import Validator from 'validator';
import isEmpty from '../../../../common/utils/isEmpty';

const validateCalc = ({ age, gender, activity, height, weight }) => {
  let errors = [];

  age = !isEmpty(age) ? age : '';
  gender = !isEmpty(gender) ? gender : '';
  activity = !isEmpty(activity) ? activity : '';
  height = !isEmpty(height) ? height : '';
  weight = !isEmpty(weight) ? weight : '';


  // Validate Numbers
  if(!Validator.isNumeric(age)) errors.age = 'Only numbers allowed';
  
  if(!Validator.isNumeric(height)) errors.height = 'Only numbers allowed';
  
  if(!Validator.isNumeric(weight)) errors.weight = 'Only numbers allowed';


  // Validate Age
  if(Validator.isInt(age, {min:-Infinity, max:17})) errors.age = 'Minimum age must be 18';
  
  if(Validator.isInt(age, {min:100, max:Infinity})) errors.age = 'Miximum age required is 99';
  
  // Validate Height
  if(Validator.isInt(height, {min:-Infinity, max:0})) errors.height = 'Minimum height required is 1';
  
  if(Validator.isInt(height, {min:301, max: Infinity})) errors.height = 'Miximum height required is 300';
  
  // Validate Weight
  if(Validator.isInt(weight, {min:-Infinity, max:0})) errors.weight = 'Minimum weight required is 1';
  
  if(Validator.isInt(weight, {min:1001, max: Infinity})) errors.weight = 'Miximum weight required is 1000';


  // Validate allow_leading_zeroes: false
  if(!Validator.isInt(age, {allow_leading_zeroes: false})) errors.age = 'Only valid numbers allowed';
  
  if(!Validator.isInt(height, {allow_leading_zeroes: false})) errors.height = 'Only valid numbers allowed';

  if(!Validator.isInt(weight, {allow_leading_zeroes: false})) errors.weight = 'Only valid numbers allowed';



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