const Validator = require('validator');
const isEmpty = require('./utils/isEmpty');
const isOneDecimal = require('./utils/isOneDecimal');
const isFloatAndMin = require('./utils/isFloat').isFloatAndMin;
const isFloatAndMax = require('./utils/isFloat').isFloatAndMax;
const isIntAndMin = require('./utils/isInteger').isIntAndMin;
const isIntAndMax = require('./utils/isInteger').isIntAndMax;

module.exports = function validateItem({ name, qty, type, cal, prot, fat, carb }) {
  let errors = [];

  name = !isEmpty(name) ? name : '';
  qty = !isEmpty(qty) ? qty : '';
  type = !isEmpty(type) ? type : '';
  cal = !isEmpty(cal) ? cal : '';
  prot = !isEmpty(prot) ? prot : '';
  fat = !isEmpty(fat) ? fat : '';
  carb = !isEmpty(carb) ? carb : '';


  // Validate name
  if(!Validator.isLength(name, { min:1, max: 50 })) errors.name = 'Product Name must be between 1 and 50 characters';

  // Validate QTY
  if(!Validator.isInt(qty)) errors.qty = 'No decimals allowed';
  if(isIntAndMax(qty)) errors.qty = 'Maximum Qty. is 1000';
  if(isIntAndMin(qty)) errors.qty = 'Minimum Qty. is 1';


  // Validate Cal
  if(isIntAndMin(cal)) errors.cal = 'Minimum Qty. is 0.1';
  if(isIntAndMax(cal)) errors.cal = 'Maximum Qty. is 1000';
  if(isFloatAndMin(cal)) errors.cal = 'Minimum Qty. is 0.1';
  if(isFloatAndMax(cal)) errors.cal = 'Maximum Qty. is 1000';
  if(isOneDecimal(cal)) errors.cal = 'Maximum decimal is 1';

  // Validate Prot
  if(isIntAndMin(prot)) errors.prot = 'Minimum Qty. is 0.1';
  if(isIntAndMax(prot)) errors.prot = 'Maximum Qty. is 1000';
  if(isFloatAndMin(prot)) errors.prot = 'Minimum Qty. is 0.1';
  if(isFloatAndMax(prot)) errors.prot = 'Maximum Qty. is 1000';
  if(isOneDecimal(prot)) errors.prot = 'Maximum decimal is 1';

  // Validate Fat
  if(isIntAndMin(fat)) errors.fat = 'Minimum Qty. is 0.1';
  if(isIntAndMax(fat)) errors.fat = 'Maximum Qty. is 1000';
  if(isFloatAndMin(fat)) errors.fat = 'Minimum Qty. is 0.1';
  if(isFloatAndMax(fat)) errors.fat = 'Maximum Qty. is 1000';
  if(isOneDecimal(fat)) errors.fat = 'Maximum decimal is 1';

  // Validate Carb
  if(isIntAndMin(carb)) errors.carb = 'Minimum Qty. is 0.1';
  if(isIntAndMax(carb)) errors.carb = 'Maximum Qty. is 1000';
  if(isFloatAndMin(carb)) errors.carb = 'Minimum Qty. is 0.1';
  if(isFloatAndMax(carb)) errors.carb = 'Maximum Qty. is 1000';
  if(isOneDecimal(carb)) errors.carb = 'Maximum decimal is 1';
  
  
  // Validate Numbers
  if(!Validator.isNumeric(qty)) errors.qty = 'Only numbers allowed';
  if(!Validator.isNumeric(cal)) errors.cal = 'Only numbers allowed';
  if(!Validator.isNumeric(prot)) errors.prot = 'Only numbers allowed';
  if(!Validator.isNumeric(fat)) errors.fat = 'Only numbers allowed';
  if(!Validator.isNumeric(carb)) errors.carb = 'Only numbers allowed';


  // Validate Empty
  if(Validator.isEmpty(name)) errors.name = 'Product Name field is required';
  if(Validator.isEmpty(qty)) errors.qty = 'Quantity field is required';
  if(Validator.isEmpty(type)) errors.type = 'Type field is required';
  if(Validator.isEmpty(cal)) errors.cal = 'Calories field is required';
  if(Validator.isEmpty(prot)) errors.prot = 'Protein field is required';
  if(Validator.isEmpty(fat)) errors.fat = 'Fat field is required';
  if(Validator.isEmpty(carb)) errors.carb = 'Carbohydrates field is required';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};