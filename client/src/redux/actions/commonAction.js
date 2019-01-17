import { GET_ERRORS, GET_CLEAR_ERROR } from './types';

// Set custom error
export const setError = data => {
  return {
    type: GET_ERRORS,
    payload: data
  };
};

// Clear Error(s)
export const clearError = () => {
  return { 
    type: GET_CLEAR_ERROR
  };
};