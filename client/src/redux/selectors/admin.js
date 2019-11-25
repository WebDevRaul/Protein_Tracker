import { createSelector } from 'reselect';
import { select } from './utils/select_keys';

const select_admin_state = state => state.admin;
const select_isLoading_state = state => state.loading.admin.isLoading;
const select_errors_state = state => state.error.admin.error;

export const state_admin = createSelector(
  [select_admin_state],
  state => state.items
);

export const state_admin_isLoading = createSelector(
  [select_isLoading_state],
  state => state
);

export const state_admin_isDefault = createSelector(
  [select_admin_state],
  state => state.isDefault
);

export const state_errors = createSelector(
  [select_errors_state],
  state => state
);

export const state_select_keys = createSelector(
  [select_admin_state],
  state => select(state.items)
);