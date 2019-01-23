import { GET_ITEM } from '../actions/types';

const initialState = {
  item: {}
};

export default function(initialState=state, action) {
  switch(action.type) {
    case GET_ITEM:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  };
};