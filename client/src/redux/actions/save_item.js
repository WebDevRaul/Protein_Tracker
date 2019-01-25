import axios from 'axios';
import { SAVE_ITEM, GET_ERRORS } from './types';

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