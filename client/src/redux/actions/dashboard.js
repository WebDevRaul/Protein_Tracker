import axios from 'axios';
import { 
  ADD_PRODUCT, 
  FIND_PRODUCTS, 
  ADD_BREAKFAST_OFFLINE, 
  ADD_LUNCH_OFFLINE, 
  ADD_DINER_OFFLINE, 
  ADD_SNACK_OFFLINE, 
  DELETE_PRODUCT,
  DELETE_ALL,
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
  // Lunch
  if (data.table_id === 'lunch') {
    return {
      type: ADD_LUNCH_OFFLINE,
      payload: data
    }
  }
  // Diner
  if (data.table_id === 'diner') {
    return {
      type: ADD_DINER_OFFLINE,
      payload: data
    }
  }
  // Snack
  if (data.table_id === 'snack') {
    return {
      type: ADD_SNACK_OFFLINE,
      payload: data
    }
  }
};

// Delete item
export const deleteProduct = data => dispatch => {
  axios
    .delete(`/api/dashboard/${data}`)
    .then(res => dispatch({
      type: DELETE_PRODUCT,
      payload: data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

// Delete all items
export const deleteAllOffline = userID => dispatch => {
  axios
    .delete(`/api/dashboard/deleteAll/${userID}`)
    .then(res => dispatch({
      type: DELETE_ALL,
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}