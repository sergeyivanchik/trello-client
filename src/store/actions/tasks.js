import {
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE
} from '../constants/tasks';


export const getTasksSuccess = tasks => ({
  type: GET_TASKS_SUCCESS,
  payload: tasks
});

export const getTasksFailure = error => ({
  type: GET_TASKS_FAILURE,
  payload: error
});

export const addTaskSuccess = task => ({
  type: ADD_TASK_SUCCESS,
  payload: task
});

export const addTaskFailure = error => ({
  type: ADD_TASK_FAILURE,
  payload: error
})
