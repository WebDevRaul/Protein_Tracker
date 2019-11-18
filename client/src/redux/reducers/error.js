import { USER, TABLE, ADMIN } from '../actions/types';

const INITIAL_STATE = {
  user: {
    error: {}
  },
  table: {
    error: {}
  },
  admin: {
    error: {}
  }
}

const error = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case ADMIN.ERROR:
      return { ...state, admin: { ...state.admin, error: payload } }
    case ADMIN.CLEAR_ERRORS:
      return { ...state, admin: { ...state.admin, error: {} } }
    default:
      return state;
  }
};

export default error;