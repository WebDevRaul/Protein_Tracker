import { USER, TARGET, ADMIN } from '../actions/types';

const INITIAL_STATE = {
  user: {
    isLoading: false
  },
  target: {
    set: {
      isLoading: false
    },
    calc: {
      isLoading: false
    }
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
    case USER.LOADING:
      return { ...state, user: { ...state.user, isLoading: true }};
    case USER.LOADED:
      return { ...state, user: { ...state.user, isLoading: false }};

    case TARGET.LOADING_SET:
      return { ...state, target: { ...state.target, set: { isLoading: true } }};
    case TARGET.LOADED_SET:
      return { ...state, target: { ...state.target, set: { isLoading: false } }};
    case TARGET.LOADING_CALC:
      return { ...state, target: { ...state.target, calc: { isLoading: true } }};
    case TARGET.LOADED_CALC:
      return { ...state, target: { ...state.target, calc: { isLoading: false } }};

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