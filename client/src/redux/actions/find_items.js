import axios from 'axios';
import { FIND_ITEM, GET_ERRORS } from './types';

export const findItems = data => dispatch => {
  axios
    .get(`/api/items/${data}`)
    .then(res => console.log('test', res.data))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}