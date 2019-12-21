import { createSelector } from 'reselect';
import doSort from './utils/do_sort';

const select_meal_state = state => state.meal;
const select_isLoading_state = state => state.loading.meal.isLoading;
const select_errors_state = state => state.error.meal.error;

export const state_meal_isLoading = createSelector(
  [select_isLoading_state],
  state => state
);

export const state_meal_isDefault = createSelector(
  [select_meal_state],
  state => state.isDefault
);

export const state_breakfast = createSelector(
  [select_meal_state],
  state => doSort(state.breakfast)
)
export const state_lunch = createSelector(
  [select_meal_state],
  state => doSort(state.lunch)
)
export const state_dinner = createSelector(
  [select_meal_state],
  state => doSort(state.dinner)
)
export const state_snack = createSelector(
  [select_meal_state],
  state => doSort(state.snack)
)

export const state_errors = createSelector(
  [select_errors_state],
  state => state
);