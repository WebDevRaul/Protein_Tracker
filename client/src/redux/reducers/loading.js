import { USER, TARGET, ADMIN, MEAL } from '../actions/types';

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
  meal: {
    isLoading: false
  },
  admin: {
    isLoading: false
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

    case MEAL.LOADING:
      return { ...state, meal: { ...state.meal, isLoading: true }};
    case MEAL.LOADED:
      return { ...state, meal: { ...state.meal, isLoading: false }};

    case ADMIN.LOADING:
      return { ...state, admin: { ...state.admin, isLoading: true }};
    case ADMIN.LOADED:
      return { ...state, admin: { ...state.admin, isLoading: false }};
    default:
      return state;
  }
};

export default loading;