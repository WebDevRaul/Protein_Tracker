import { ADD_ITEM_DASHBOARD } from '../actions/types';

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
    default:
      return state;
  }
};