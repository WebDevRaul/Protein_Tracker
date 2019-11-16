import { GET_ERRORS, GET_CLEAR_ERROR, CLEAR_ITEMS } from './typess';

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

// Clear Items on signOut
export const clearItems = () => {
  return {
    type: CLEAR_ITEMS,
  };
};