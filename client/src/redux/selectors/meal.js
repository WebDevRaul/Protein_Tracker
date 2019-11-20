import { createSelector } from 'reselect';

const select_isLoading_state = state => state.loading.meal.isLoading;
const select_errors_state = state => state.error.meal.error;

export const state_isLoading = createSelector(
  [select_isLoading_state],
  state => state
);

export const state_errors = createSelector(
  [select_errors_state],
  state => state
);