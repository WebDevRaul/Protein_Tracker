import axios from 'axios';
import { MEAL } from './types';
import { ADD_ITEM } from './utils/add_item';
import URL from './utils/URL';

export const updateMeal = () => dispatch => {
  dispatch({ type: MEAL.LOADING });
  axios.get(`${URL.meal}/update`)
    .then(({ data }) => {
      dispatch({ type: MEAL.UPDATE, payload: data });
      dispatch({ type: MEAL.LOADED });
    })
    .catch(err => {
      dispatch({ type: MEAL.ERROR, payload: err.response.data })
      dispatch({ type: MEAL.LOADED });
    })
}

export const addItemToTable = ({ data, title }) => ADD_ITEM({
  ENDPOINT: `${URL.meal}/${title}/add-item`,
  DATA: data,
  TABLE: title,
  LOADING: `${title}.LOADING`,
  REDUX: `${title}.ITEM_UPDATE_REDUX`,
  SUCCESS_TYPE: `${title}.ITEM_UPDATE`,
  ERROR_TYPE: 'MEAL.ERROR',
  LOADED: `${title}.LOADED`
})

export const clearMealErrors = () => {


}