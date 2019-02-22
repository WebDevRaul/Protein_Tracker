import axios from 'axios';
import { GET_ERRORS, REGISTER_SUCCESS } from './types';

// Register User
export const registerUser = userData => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => dispatch({
      type: REGISTER_SUCCESS
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const defaultItems = (data, history) => dispatch => {
  axios
    .post('/api/users/register/defaultItems', data)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};