import axios from 'axios';
import { GET_ERRORS, FIND_ITEMS } from './types';

// Clear items
import { clearItems } from './commonAction';

// Delete item
export const deleteItem = data => dispatch => {
  dispatch(clearItems({}));
  axios
    .delete(`/api/items/${data}`)
    .then(res => dispatch({
      type: FIND_ITEMS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};