import { createSelector } from 'reselect';

const select_target_state = state => state.target;
const select_isLoading_state = state => state.loading.target;
const select_errors_state = state => state.error.target.error;

export const state_target = createSelector(
  [select_target_state],
  state => state
);

export const state_set_isLoading = createSelector(
  [select_isLoading_state],
  state => state.set.isLoading
);

export const state_calc_isLoading = createSelector(
  [select_isLoading_state],
  state => state.calc.isLoading
);

export const state_errors = createSelector(
  [select_errors_state],
  state => state
);