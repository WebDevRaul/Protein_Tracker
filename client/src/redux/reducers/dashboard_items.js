import { ADD_PRODUCT, FIND_PRODUCTS } from '../actions/types';

const initialState = {
  item: {},
  items: []
};

export default function(state=initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT:
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