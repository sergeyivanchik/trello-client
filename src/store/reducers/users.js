import { 
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  CHECK_AUTHORIZATION_SUCCESS,
  CHECK_AUTHORIZATION_FAILURE,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from '../constants/users.js';


const initialState = {
  currentUser: '',
  error: ''
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, currentUser: action.payload };

    case LOG_IN_FAILURE: 
      return { ...state, error: action.payload };

    case LOG_OUT_SUCCESS:
      return { ...state, currentUser: '' };

    case LOG_OUT_FAILURE: 
      return { ...state, error: action.payload };

    case CHECK_AUTHORIZATION_SUCCESS:
      return { ...state, currentUser: action.payload };

    case CHECK_AUTHORIZATION_FAILURE: 
      return { ...state, error: action.payload };

    case SIGN_UP_SUCCESS:
      return { ...state, error: '' };

    case SIGN_UP_FAILURE: 
      return { ...state, error: action.payload };

    default:
      return state;
}};
