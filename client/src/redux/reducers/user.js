import { USER, TARGET, ADMIN } from '../actions/types';

const INITIAL_STATE = {
  info: {},
  target: {},
  breakfast: {},
  lunch: {},
  diner: {},
  snack: {},
  isAuth: false,
}

const user = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case USER.SIGN_IN:
    case TARGET.SET:
    case ADMIN.SAVE_ITEM:
    case ADMIN.DELETE_ITEM:
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
          info: {},
          target: {},
          breakfast: {},
          lunch: {},
          diner: {},
          snack: {},
          isAuth: false
        };
    default:
      return state;
  }
};

export default user;