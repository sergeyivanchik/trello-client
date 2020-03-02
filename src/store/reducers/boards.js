import {
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILURE,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE,
  GET_BOARD_BY_ID_SUCCESS,
  GET_BOARDS_BY_ID_FAILURE
} from '../constants/boards.js';


const initialState = {
  allBoards: [],
  boardById: {},
  error: ''
}

export default function boards(state = initialState, action) {
  switch (action.type) {
    case GET_BOARDS_SUCCESS:
      return { ...state, allBoards: action.payload };

    case GET_BOARDS_FAILURE: 
      return { ...state, error: action.payload };

    case ADD_BOARD_SUCCESS:
      return { ...state, allBoards: [...state.allBoards, action.payload] };

    case ADD_BOARD_FAILURE: 
      return { ...state, error: action.payload };

      case GET_BOARD_BY_ID_SUCCESS:
        return { ...state, boardById: action.payload };
  
      case GET_BOARDS_BY_ID_FAILURE: 
        return { ...state, error: action.payload };

    default:
      return state;
}};
