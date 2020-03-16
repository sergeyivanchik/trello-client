import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../constants/snackbar.js';

export const showSnackbar = data => ({
  type: SHOW_SNACKBAR,
  payload: data
});

export const hideSnackbar = () => ({
  type: HIDE_SNACKBAR
});
