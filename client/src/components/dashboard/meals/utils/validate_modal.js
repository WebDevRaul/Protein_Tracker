import Validator from 'validator';
import isEmpty from '../../../common/utils/isEmpty';
import { isIntAndMin, isIntAndMax } from '../../../common/utils/isInteger';

const validateModal = qty => {
  let errors = {};

  qty = !isEmpty(qty) ? qty : '';
  
  if(!Validator.isInt(qty)) errors.qty = 'No decimals allowed';
  if(isIntAndMax(qty)) errors.qty = 'Maximum Qty. is 1000';
  if(isIntAndMin(qty)) errors.qty = 'Minimum Qty. is 1';
  if(Validator.isEmpty(qty)) errors.qty = 'QTY field is required';

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateModal;