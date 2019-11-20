import { USER, TARGET } from '../actions/types';

const INITIAL_STATE = {
  cal: '0',
  prot: '0',
  fat: '0',
  carb: '0'
}

const target = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case TARGET.SET_REDUX:
    case TARGET.SET:
      return { ...state, cal: payload.cal, prot: payload.prot, fat: payload.fat, carb: payload.carb }
    case USER.SIGN_OUT:
        return { ...state, cal: '0', prot: '0', fat: '0', carb: '0' };
    default:
      return state;
  }
};

export default target;