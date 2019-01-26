import { FIND_ITEMS, DELETE_ITEM, CLEAR_ITEMS } from '../actions/types';

const initialState = {
  items: [],
};

export default function(state=initialState, action) {
  switch(action.type) {
    case FIND_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      }
    case CLEAR_ITEMS:
      return {
        ...state,
        items: []
      }
    default:
      return state;
  }
};