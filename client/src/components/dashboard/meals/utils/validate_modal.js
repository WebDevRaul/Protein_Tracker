import Validator from 'validator';
import isEmpty from '../../../common/utils/isEmpty';
import { isIntAndMin, isIntAndMax } from '../../../common/utils/isInteger';
import { isFloatAndMax } from '../../../common/utils/isFloat';

const validateModal = ({ qty, cal, prot, fat, carb }) => {
  let errors = {};

  qty = !isEmpty(qty) ? qty : '';

  if(isIntAndMax(cal)) errors.qty = 'Maximum Cal. is 1000';
  if(isIntAndMax(prot)) errors.qty = 'Maximum Prot. is 1000';
  if(isIntAndMax(fat)) errors.qty = 'Maximum Fat. is 1000';
  if(isIntAndMax(carb)) errors.qty = 'Maximum Card. is 1000';

  if(isFloatAndMax(cal)) errors.qty = 'Maximum Cal. is 1000';
  if(isFloatAndMax(prot)) errors.qty = 'Maximum Prot. is 1000';
  if(isFloatAndMax(fat)) errors.qty = 'Maximum Fat. is 1000';
  if(isFloatAndMax(carb)) errors.qty = 'Maximum Carb. is 1000';
  
  if(!Validator.isInt(qty)) errors.qty = 'No decimals allowed';
  if(isIntAndMax(qty)) errors.qty = 'Maximum Qty. is 1000';
  if(isIntAndMin(qty)) errors.qty = 'Minimum Qty. is 1';
  if(Validator.isEmpty(qty)) errors.qty = 'Qty field is required';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateModal;