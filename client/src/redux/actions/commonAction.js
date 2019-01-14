import { GET_ERRORS } from './types';

//Set custom error
export const setError = data => {
  return {
    type: GET_ERRORS,
    payload: data
  };
};