import { SHOW_SPINNER, HIDE_SPINNER } from '../constants/spinner';


const initialState = {
  isLoading: false
}

export default function spinner(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, isLoading: true };

    case HIDE_SPINNER: 
      return { ...state, isLoading: false };
      
    default:
      return state;
}};
