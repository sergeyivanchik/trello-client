import {
  GET_LISTS_SUCCESS,
  GET_LISTS_FAILURE,
  ADD_LISTS_SUCCESS,
  ADD_LISTS_FAILURE
} from '../constants/lists';


const initialState = {
  allLists: [],
  error: ''
}

export default function lists(state = initialState, action) {
  switch (action.type) {
    case GET_LISTS_SUCCESS:
      return { ...state, allLists: action.payload };

    case GET_LISTS_FAILURE: 
      return { ...state, error: action.payload };

    case ADD_LISTS_SUCCESS:
      return { ...state, allLists: [...state.allLists, action.payload] };

    case ADD_LISTS_FAILURE: 
      return { ...state, error: action.payload };
      
    default:
      return state;
}};
