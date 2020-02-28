import {
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILURE,
  ADD_BOARDS_SUCCESS,
  ADD_BOARDS_FAILURE
} from '../constants/boards.js';


const initialState = {
  allBoards: [],
  error: ''
}

export default function boards(state = initialState, action) {
  switch (action.type) {
    case GET_BOARDS_SUCCESS:
      return { ...state, allBoards: action.payload };

    case GET_BOARDS_FAILURE: 
      return { ...state, error: action.payload };

    case ADD_BOARDS_SUCCESS:
      return { ...state, allBoards: [...state.allBoards, action.payload] };

    case ADD_BOARDS_FAILURE: 
      return { ...state, error: action.payload };
      
    default:
      return state;
}};
