import axios from 'axios';
import { GET_ERRORS, SAVE_ITEM, FIND_ITEMS, DELETE_ITEM } from './types';


// Save item
export const saveItem = item => dispatch => {
  axios
    .post('/api/items', item)
    .then(res => dispatch({
      type: SAVE_ITEM,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

// Find Items
export const findItems = data => dispatch => {
  axios
    .get(`/api/items/${data}`)
    .then(res => dispatch({
      type: FIND_ITEMS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

// Delete item
export const deleteItem = data => dispatch => {
  axios
    .delete(`/api/items/${data}`)
    .then(res => dispatch({
      type: DELETE_ITEM,
      payload: data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};