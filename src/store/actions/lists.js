import axios from "axios";

import {
  GET_LISTS_SUCCESS,
  GET_LISTS_FAILURE,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILURE
} from '../constants/lists.js';


export const getListsSuccess = lists => ({
  type: GET_LISTS_SUCCESS,
  payload: lists
});

export const getListsFailure = error => ({
  type: GET_LISTS_FAILURE,
  payload: error
});

export const getListsAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('lists');
      dispatch(getListsSuccess(data))
    }
    catch (error) {
      dispatch(getListsFailure(error))
    }
  }
};

export const addListSuccess = list => ({
  type: ADD_LIST_SUCCESS,
  payload: list
});

export const addListFailure = error => ({
  type: ADD_LIST_FAILURE,
  payload: error
})
