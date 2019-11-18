import { ADMIN } from '../actions/types';

const INITIAL_STATE = {
  user: {
    isLoading: false
  },
  table: {
    isLoading: false
  },
  admin: {
    form: {
      isLoading: false
    },
    item: {
      isLoading: false
    }
  }
}

const loading = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case ADMIN.LOADING_FORM:
      return { ...state, admin: { ...state.admin, form: { isLoading: true } }};
    case ADMIN.LOADED_FORM:
      return { ...state, admin: { ...state.admin, form: { isLoading: false } }};
    case ADMIN.LOADING_ITEM:
      return { ...state, admin: { ...state.item, item: { isLoading: true } }};
    case ADMIN.LOADED_ITEM:
      return { ...state, admin: { ...state.item, item: { isLoading: false } }};
    default:
      return state;
  }
};

export default loading;