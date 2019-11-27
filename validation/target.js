const Validator = require('validator');
const isEmpty = require('./utils/isEmpty');
const isIntAndMin = require('./utils/isInteger').isIntAndMin;
const isIntAndMaxT = require('./utils/isInteger').isIntAndMaxT;

module.exports = function validateTarget({ cal, prot, fat, carb }) {
  let errors = {};

  cal = !isEmpty(cal) ? cal : '';
  prot = !isEmpty(prot) ? prot : '';
  fat = !isEmpty(fat) ? fat : '';
  carb = !isEmpty(carb) ? carb : '';
  
  // Validate Cal
  if(!Validator.isInt(cal)) errors.cal = 'No decimals allowed';
  if(isIntAndMin(cal)) errors.cal = 'Minimum Qty. is 0';
  if(isIntAndMaxT(cal)) errors.cal = 'Maximum Qty. is 10000';

  // Validate Prot
  if(!Validator.isInt(prot)) errors.prot = 'No decimals allowed';
  if(isIntAndMin(prot)) errors.prot = 'Minimum Qty. is 0';
  if(isIntAndMaxT(prot)) errors.prot = 'Maximum Qty. is 10000';

  // Validate Fat
  if(!Validator.isInt(fat)) errors.prot = 'No decimals allowed';
  if(isIntAndMin(fat)) errors.fat = 'Minimum Qty. is 0';
  if(isIntAndMaxT(fat)) errors.fat = 'Maximum Qty. is 10000';

  // Validate Carb
  if(!Validator.isInt(carb)) errors.carb = 'No decimals allowed';
  if(isIntAndMin(carb)) errors.carb = 'Minimum Qty. is 0';
  if(isIntAndMaxT(carb)) errors.carb = 'Maximum Qty. is 10000';

  // Validate Numbers
  if(!Validator.isNumeric(cal)) errors.cal = 'Only numbers allowed';
  if(!Validator.isNumeric(prot)) errors.prot = 'Only numbers allowed';
  if(!Validator.isNumeric(fat)) errors.fat = 'Only numbers allowed';
  if(!Validator.isNumeric(carb)) errors.carb = 'Only numbers allowed';

  // Validate Empty
  if(Validator.isEmpty(cal)) errors.cal = 'Calories field is required';
  if(Validator.isEmpty(prot)) errors.prot = 'Protein field is required';
  if(Validator.isEmpty(fat)) errors.fat = 'Fat field is required';
  if(Validator.isEmpty(carb)) errors.carb = 'Carbohydrates field is required';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};