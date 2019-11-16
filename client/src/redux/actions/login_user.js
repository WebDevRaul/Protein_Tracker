import axios from 'axios';
import setAuthToken from '../../components/auth/utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, NEW_USER, UPDATE_NEW_USER } from './typess';

// Login User
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to localStorage
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

// Set Currenct User
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
};

// Set default items
export const setDefaultItems = (data, id) => dispatch => {
  axios
    .post(`/api/users/login/${id}`, data)
    .then(res => dispatch({
      type: NEW_USER
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

// Update newUser to False
export const updateNewUser = id => dispatch => {
  axios
    .post(`/api/users/login/update/${id}`)
    .then(res => dispatch({
      type: UPDATE_NEW_USER
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};