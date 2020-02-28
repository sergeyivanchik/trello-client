import {
  GET_LISTS_SUCCESS,
  GET_LISTS_FAILURE,
  ADD_LISTS_SUCCESS,
  ADD_LISTS_FAILURE
} from '../constants/lists.js';


export const getListsSuccess = boards => ({
  type: GET_LISTS_SUCCESS,
  payload: boards
});

export const getListsFailure = error => ({
  type: GET_LISTS_FAILURE,
  payload: error
});

export const addListsSuccess = board => ({
  type: ADD_LISTS_SUCCESS,
  payload: board
});

export const addListsFailure = error => ({
  type: ADD_LISTS_FAILURE,
  payload: error
})
