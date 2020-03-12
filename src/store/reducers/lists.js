import {
  GET_LISTS_SUCCESS,
  GET_LISTS_FAILURE,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILURE,
  GET_LISTS_BY_BOARD_SUCCESS,
  GET_LISTS_BY_BOARD_FAILURE,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE
} from '../constants/lists';


const initialState = {
  allLists: [],
  listsByBoard: [],
  deleteList: {},
  error: ''
}

export default function lists(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS_SUCCESS:
      return { ...state, allLists: action.payload };

    case GET_LISTS_FAILURE: 
      return { ...state, error: action.payload };

    case ADD_LIST_SUCCESS:
      return { ...state, listsByBoard: [...state.listsByBoard, action.payload] };

    case ADD_LIST_FAILURE: 
      return { ...state, error: action.payload };

    case GET_LISTS_BY_BOARD_SUCCESS:
      return { ...state, listsByBoard: action.payload };

    case GET_LISTS_BY_BOARD_FAILURE: 
      return { ...state, error: action.payload };

    case DELETE_LIST_SUCCESS:
      return { ...state, deleteList: action.payload };

    case DELETE_LIST_FAILURE: 
      return { ...state, error: action.payload };
      
    default:
      return state;
}};
