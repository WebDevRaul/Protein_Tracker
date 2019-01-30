import { ADD_ITEM_DASHBOARD, FIND_PRODUCTS } from '../actions/types';

const initialState = {
  item: {},
  items: []
};

export default function(state=initialState, action) {
  switch(action.type) {
    case ADD_ITEM_DASHBOARD:
      return {
        ...state,
        item: action.payload
      }
    case FIND_PRODUCTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
};