import axios from 'axios';
import { MEAL, BREAKFAST, LUNCH, DINER, SNACK } from './types';
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

export const addItemToTable = ({ data, title }) => {
  if(title === 'BREAKFAST') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
      LOADING: BREAKFAST.LOADING,
      REDUX: BREAKFAST.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: BREAKFAST.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: BREAKFAST.LOADED
    })
  }
  if(title === 'LUNCH') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
      LOADING: LUNCH.LOADING,
      REDUX: LUNCH.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: LUNCH.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: LUNCH.LOADED
    })
  }
  if(title === 'DINER') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
      LOADING: DINER.LOADING,
      REDUX: DINER.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: DINER.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: DINER.LOADED
    })
  }
  if(title === 'SNACK') {
    return ADD_ITEM({
      ENDPOINT: `${URL.meal}/${title}/add-item`,
      DATA: data,
      LOADING: SNACK.LOADING,
      REDUX: SNACK.ITEM_UPDATE_REDUX,
      SUCCESS_TYPE: SNACK.ITEM_UPDATE,
      ERROR_TYPE: MEAL.ERROR,
      LOADED: SNACK.LOADED
    })
  }
}

export const clearMealErrors = () => {


}