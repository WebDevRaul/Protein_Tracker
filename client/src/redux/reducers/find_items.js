import { FIND_ITEMS, CLEAR_ITEMS } from '../actions/types';

const initialState = {
  items: [],
};

export default function(state=initialState, action) {
  switch(action.type) {
    case FIND_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        items: []
      }
    default:
      return state;
  }
};