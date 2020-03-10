import axios from "axios";

import {
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILURE,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE,
  GET_BOARD_BY_ID_SUCCESS,
  GET_BOARD_BY_ID_FAILURE,
  GET_BOARDS_BY_USER_SUCCESS,
  GET_BOARDS_BY_USER_FAILURE
} from '../constants/boards.js';


export const getBoardsByUserSuccess = boards => ({
  type: GET_BOARDS_BY_USER_SUCCESS,
  payload: boards
});

export const getBoardsByUserFailure = error => ({
  type: GET_BOARDS_BY_USER_FAILURE,
  payload: error
});

export const getBoardsByUserAsync = userId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`boards/user/${userId}`);
      dispatch(getBoardsByUserSuccess(data))
    }
    catch (error) {
      dispatch(getBoardsByUserFailure(error))
    }
  }
}

export const getBoardsSuccess = boards => ({
  type: GET_BOARDS_SUCCESS,
  payload: boards
});

export const getBoardsFailure = error => ({
  type: GET_BOARDS_FAILURE,
  payload: error
});

export const getBoardsAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('boards');
      dispatch(getBoardsSuccess(data))
    }
    catch (error) {
      dispatch(getBoardsFailure(error))
    }
  }
};

export const addBoardSuccess = board => ({
  type: ADD_BOARD_SUCCESS,
  payload: board
});

export const addBoardFailure = error => ({
  type: ADD_BOARD_FAILURE,
  payload: error
});

export const addBoardAsync = title => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`boards`, 
        { title }
      );
      dispatch(addBoardSuccess(data));
    }
    catch (error) {
      dispatch(addBoardFailure(error));
    }
  }
};

export const getBoardByIdSuccess = board => ({
  type: GET_BOARD_BY_ID_SUCCESS,
  payload: board
});

export const getBoardByIdFailure = error => ({
  type: GET_BOARD_BY_ID_FAILURE,
  payload: error
});

export const getBoardByIdAsync = boardId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`boards/${boardId}`);
      dispatch(getBoardByIdSuccess(data));
    }
    catch (error) {
      dispatch(getBoardByIdFailure(error));
    }
  }
};
