import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../constants/snackbar.js';


const initialState = {
  isShown: false,
  data: {}
};

export default function snackbar(state = initialState, action) {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return { ...state, isShown: true, data: action.payload };

    case HIDE_SNACKBAR: 
      return { ...state, isShown: false, data: {} };
      
    default:
      return state;
}}
