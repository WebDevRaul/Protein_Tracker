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
  GET_ERRORS,
  COLLECT_BREAKFAST,
  COLLECT_LUNCH,
  COLLECT_DINER,
  COLLECT_SNACK,
  GET_CLEAR_TABLE,
  CLEAR_LOCAL_BREAKFAST,
  CLEAR_LOCAL_LUNCH,
  CLEAR_LOCAL_DINER,
  CLEAR_LOCAL_SNACK,
  NEW_QUANTITY,
  UPDATE_BREAKFAST_OFFLINE,
  UPDATE_LUNCH_OFFLINE,
  UPDATE_DINER_OFFLINE,
  UPDATE_SNACK_OFFLINE,
  DAILY_TARGET,
  COLLECT_DAILY,
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

// Fetch total sum for table
export const collectSum = data => {
  if (data[4].table === 'breakfast') {
    return { 
      type: COLLECT_BREAKFAST,
      payload: data
    };
  }
  if (data[4].table === 'lunch') {
    return { 
      type: COLLECT_LUNCH,
      payload: data
    };
  }
  if (data[4].table === 'diner') {
    return { 
      type: COLLECT_DINER,
      payload: data
    };
  }
  if (data[4].table === 'snack') {
    return { 
      type: COLLECT_SNACK,
      payload: data
    };
  }
};

// Clear totalSum vals from redux on clear table
export const clearTable = () => {
  return { 
    type: GET_CLEAR_TABLE
  };
};

// Clear totalSum vals from redux on clear table
export const clearLocalTable = data => {
  if (data === 'breakfast') {
    return { 
      type: CLEAR_LOCAL_BREAKFAST
    };
  };
  if (data === 'lunch') {
    return { 
      type: CLEAR_LOCAL_LUNCH
    };
  };
  if (data === 'diner') {
    return { 
      type: CLEAR_LOCAL_DINER
    };
  };
  if (data === 'snack') {
    return { 
      type: CLEAR_LOCAL_SNACK
    };
  };
};

// Save newQuantity
export const saveNewQuantity = data => dispatch =>{
  axios
    .post(`/api/dashboard/edit/${data.id}`, data)
    .then(res => dispatch({
      type: NEW_QUANTITY,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

// Update newQuantity on Item - [Redux]
export const update_Offline = data => {
  if (data.table_id === 'breakfast') {
    return {
      type: UPDATE_BREAKFAST_OFFLINE,
      payload: data
    }
  }
  if (data.table_id === 'lunch') {
    return {
      type: UPDATE_LUNCH_OFFLINE,
      payload: data
    }
  }
  if (data.table_id === 'diner') {
    return {
      type: UPDATE_DINER_OFFLINE,
      payload: data
    }
  }
  if (data.table_id === 'snack') {
    return {
      type: UPDATE_SNACK_OFFLINE,
      payload: data
    }
  }
};

// Daily Target
export const saveTotal = data => dispatch => {
  axios
    .post('/api/dashboard/dailyTarget', data)
    .then(res => dispatch({
      type: DAILY_TARGET,
      payload: data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

// Collect Daily data
export const collectDaily = () => dispatch => {
  axios
    .get('/api/dashboard/collectDaily')
    .then(res => dispatch({
      type: COLLECT_DAILY,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}