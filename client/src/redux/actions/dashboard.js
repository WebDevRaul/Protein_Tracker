import axios from 'axios';
import { 
  ADD_PRODUCT, 
  FIND_PRODUCTS, 
  ADD_BREAKFAST_OFFLINE, 
  ADD_LUNCH_OFFLINE, 
  ADD_DINER_OFFLINE, 
  ADD_SNACK_OFFLINE, 
  GET_ERRORS
    } from './types';

// Add item to TableFieldGroup
export const addProduct = data => dispatch => {
  axios
    .post('/api/dashboard', data)
    .then(res => dispatch({
      type: ADD_PRODUCT,
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

// Add product Redux [ADD_PRODUCT to DB is call anyway]
export const addProductOffline = (data) => {
  // Breakfast
  if (data.table_id === 'breakfast') {
    return {
      type: ADD_BREAKFAST_OFFLINE,
      payload: data
    }
  }
  if (data.table_id === 'lunch') {
    return {
      type: ADD_LUNCH_OFFLINE,
      payload: data
    }
  }
  if (data.table_id === 'diner') {
    return {
      type: ADD_DINER_OFFLINE,
      payload: data
    }
  }
  if (data.table_id === 'snack') {
    return {
      type: ADD_SNACK_OFFLINE,
      payload: data
    }
  }
};