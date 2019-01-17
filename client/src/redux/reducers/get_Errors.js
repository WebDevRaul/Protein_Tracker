import { GET_ERRORS, GET_CLEAR_ERROR } from '../actions/types';

const initialState = {
  errors: {}
};

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    case GET_CLEAR_ERROR:
      return {
        ...state,
        errors: {}
      }
    default:
      return state
  }
};