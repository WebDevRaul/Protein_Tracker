import { createSelector } from 'reselect';

const select_meal_state = state => state.meal;
const select_isLoading_state = state => state.loading.meal.isLoading;
const select_errors_state = state => state.error.meal.error;

export const state_isLoading = createSelector(
  [select_isLoading_state],
  state => state
);

export const state_meal_isDefault = createSelector(
  [select_meal_state],
  state => state.isDefault
);

export const state_breakfast = createSelector(
  [select_meal_state],
  state => state.breakfast
)
export const state_lunch = createSelector(
  [select_meal_state],
  state => state.lunch
)
export const state_diner = createSelector(
  [select_meal_state],
  state => state.diner
)
export const state_snack = createSelector(
  [select_meal_state],
  state => state.snack
)

export const state_errors = createSelector(
  [select_errors_state],
  state => state
);