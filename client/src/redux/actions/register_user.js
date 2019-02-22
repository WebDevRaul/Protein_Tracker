import axios from 'axios';
import { GET_ERRORS, DEFAULT_ITEMS } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const defaultItems = data => dispatch => {
  axios
    .post('/api/users/register/defaultItems', data)
    .then(res => dispatch({
      type: DEFAULT_ITEMS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};