import { USER, ADMIN } from '../actions/types';

const INITIAL_STATE = {
  items: []
}

const target = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case ADMIN.UPDATE:
      return { ...state, items: payload }
    case USER.SIGN_OUT:
        return { ...state, items: [] };
    default:
      return state;
  }
};

export default target;