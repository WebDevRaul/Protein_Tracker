import axios from 'axios';
import { ADD_ITEM_DASHBOARD, GET_ERRORS } from './types';

// Add item to TableFieldGroup
export const addItem = data => dispatch => {
  axios
    .post('/api/dashboard', data)
    .then(res => dispatch({
      type: ADD_ITEM_DASHBOARD,
      payload: 'test'
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};