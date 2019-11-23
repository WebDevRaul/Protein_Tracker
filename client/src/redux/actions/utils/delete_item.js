import axios from 'axios';

export const DELETE_ITEM = ({
  ENDPOINT,
  ID,
  LOADING,
  SUCCESS_TYPE,
  ERROR_TYPE,
  LOADED
}) => {
  return async dispatch => {
    const onSuccess = ({ _id }) => {
      dispatch({ type: SUCCESS_TYPE, payload: _id });
      dispatch({ type: LOADED });
    };
    const onError = error => {
      dispatch({ type: ERROR_TYPE, payload: error });
      dispatch({ type: LOADED });
    };
    try {
      dispatch({ type: LOADING });
      const response = await axios.post(`${ENDPOINT}`, { _id: ID });
      const { data: _id }  = response;
      return onSuccess(_id);
    } catch (error) {
      return onError(error);
    }
  }
}