import {
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE
} from '../constants/tasks';


const initialState = {
  allTasks: [],
  error: ''
}

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS_SUCCESS:
      return { ...state, allTasks: action.payload };

    case GET_TASKS_FAILURE: 
      return { ...state, error: action.payload };

    case ADD_TASK_SUCCESS:
      return { ...state, allTasks: [...state.allTasks, action.payload] };

    case ADD_TASK_FAILURE: 
      return { ...state, error: action.payload };
      
    default:
      return state;
}};
