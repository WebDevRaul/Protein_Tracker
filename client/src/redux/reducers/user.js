import { USER, TABLE } from '../actions/types';

const INITIAL_STATE = {
  info: {},
  target: {},
  breakfast: {},
  lunch: {},
  diner: {},
  snack: {},
  isAuth: false,
  errors: {},
  isLoading: false
}

const user = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case USER.SIGN_IN:
    case TABLE.SET:
      return { 
        ...state, 
        info: payload.info,
        target: payload.target,
        breakfast: payload.breakfast,
        lunch: payload.lunch,
        diner: payload.diner,
        snack: payload.snack,
        isAuth: payload.isAuth
      };
      case USER.SIGN_OUT:
        return { 
          ...state, 
          ...state, 
          info: {},
          target: {},
          breakfast: {},
          lunch: {},
          diner: {},
          snack: {},
          isAuth: false
        };
    case USER.LOADING:
      return { ...state, isLoading: true };
    case USER.LOADED:
      return { ...state, isLoading: false };
    case USER.ERROR:
      return { ...state, errors: payload };
    case USER.CLEAR_ERRORS:
      return { ...state, errors: {} };
    default:
      return state;
  }
};

export default user;