import axios from 'axios';
import { ADD_ITEM } from './utils/add_item';
import URL from './utils/URL';

export const updateMeal = () => dispatch => {
  axios.get(`${URL.meal}/update`)
    .then(({ data }) => {

    })
    .catch(err => {

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