import { FIND_ITEMS } from '../actions/types';

const initialState = {
  items: []
};

export default function(state=initialState, action) {
  switch(action.type) {
    case FIND_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    default:
      return state;
  };
};