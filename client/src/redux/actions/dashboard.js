import axios from 'axios';
import { ADD_ITEM_DASHBOARD, FIND_PRODUCTS, GET_ERRORS } from './types';

// Add item to TableFieldGroup
export const addProduct = data => dispatch => {
  axios
    .post('/api/dashboard', data)
    .then(res => dispatch({
      type: ADD_ITEM_DASHBOARD,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

// Find products
export const findProducts = data => dispatch => {
  axios
    .get(`api/dashboard/${data}`)
    .then(res => dispatch({
      type: FIND_PRODUCTS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};