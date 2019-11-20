import { USER, TARGET } from '../actions/types';

const INITIAL_STATE = {
  values: {
    cal: '0',
    prot: '0',
    fat: '0',
    carb: '0',
  },
  isDefault: true
}

const target = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case TARGET.UPDATE:
      return { ...state, values: { ...payload }, isDefault: false }
    case TARGET.SET_REDUX:
    case TARGET.SET:
    case TARGET.CALC_REDUX:
    case TARGET.CALC:
      return { ...state, values: { ...payload } }
    case USER.SIGN_OUT:
        return { ...state, values: {cal: '0', prot: '0', fat: '0', carb: '0',}, isDefault: true };
    default:
      return state;
  }
};

export default target;