import axios from "axios";
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


export const logOutSuccess = () => ({
  type: LOG_OUT_SUCCESS
});

export const logOutFailure = error => ({
  type: LOG_OUT_FAILURE,
  payload: error
});

export const logOut = () => {
  return (dispatch) => {
    try {
      localStorage.clear();
      dispatch(logOutSuccess());
    } catch (error) {
      dispatch(logOutFailure());
    }
  }
};

export const checkAuthorizationSuccess = currentUser => ({
  type: CHECK_AUTHORIZATION_SUCCESS,
  payload: currentUser
});

export const checkAuthorizationFailure = error => ({
  type: CHECK_AUTHORIZATION_FAILURE,
  payload: error
});

export const checkAuthorizationAsync = () => {
  const token = localStorage.getItem('token');
  axios.defaults.headers['AUTHORIZATION'] = token;
  return async dispatch => {
    try {
      const currentUser  = await axios.post(`users/current`);
      dispatch(checkAuthorizationSuccess(currentUser.data));
    } catch (error) {
      dispatch(checkAuthorizationFailure(error));
    };
  };
};

export const logInSuccess = () => ({
  type: LOG_IN_SUCCESS
});

export const logInFailure = error => ({
  type: LOG_IN_FAILURE,
  payload: error
});

export const logInAsync = userInfo => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`users/login`, {...userInfo});
      const { token } = data;
      if (token) {
        localStorage.setItem('token', token);
      } else console.log('token not found');
      dispatch(logInSuccess());
    } catch (error) {
      dispatch(logInFailure(error));
    };
  }
};

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS
});

export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: error
});

export const signUpAsync = userInfo => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`users/signup`, {...userInfo});
      if (data) {
        dispatch(signUpSuccess());
      } else console.log('SignUp error!');
    } catch (error) {
      dispatch(signUpFailure(error));
    }
  }
};
