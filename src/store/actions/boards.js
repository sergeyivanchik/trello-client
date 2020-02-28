import {
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILURE,
  ADD_BOARDS_SUCCESS,
  ADD_BOARDS_FAILURE
} from '../constants/boards.js';


export const getBoardsSuccess = boards => ({
  type: GET_BOARDS_SUCCESS,
  payload: boards
});

export const getBoardsFailure = error => ({
  type: GET_BOARDS_FAILURE,
  payload: error
});

export const addBoardSuccess = board => ({
  type: ADD_BOARDS_SUCCESS,
  payload: board
});

export const addBoardFailure = error => ({
  type: ADD_BOARDS_FAILURE,
  payload: error
})
