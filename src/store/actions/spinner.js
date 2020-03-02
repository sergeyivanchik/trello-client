import { SHOW_SPINNER, HIDE_SPINNER } from '../constants/spinner';

export const showSpinner = () => ({
  type: SHOW_SPINNER
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER
});
