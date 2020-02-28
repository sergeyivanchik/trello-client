import {
  GET_LISTS_SUCCESS,
  GET_LISTS_FAILURE,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILURE
} from '../constants/lists.js';


export const getListsSuccess = boards => ({
  type: GET_LISTS_SUCCESS,
  payload: boards
});

export const getListsFailure = error => ({
  type: GET_LISTS_FAILURE,
  payload: error
});

export const addListSuccess = board => ({
  type: ADD_LIST_SUCCESS,
  payload: board
});

export const addListFailure = error => ({
  type: ADD_LIST_FAILURE,
  payload: error
})
