import axios from 'axios';
import { GET_ERRORS, FIND_ITEMS } from './types';


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