import { USER, ADMIN } from '../actions/types';

const INITIAL_STATE = {
  items: [],
  isDefault: true
}

const target = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case ADMIN.UPDATE:
      return { ...state, items: payload, isDefault: false }
    case USER.SIGN_OUT:
        return { ...state, items: [], isDefault: true };
    default:
      return state;
  }
};

export default target;