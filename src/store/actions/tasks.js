import axios from 'axios';

import {
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  GET_TASKS_BY_LIST_SUCCESS,
  GET_TASKS_BY_LIST_FAILURE
} from '../constants/tasks';


export const getTasksSuccess = tasks => ({
  type: GET_TASKS_SUCCESS,
  payload: tasks
});

export const getTasksFailure = error => ({
  type: GET_TASKS_FAILURE,
  payload: error
});

export const getTasksAsync = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`tasks`);
      dispatch(getTasksSuccess(data))
    }
    catch (error) {
      dispatch(getTasksFailure(error))
    }
  }
};

export const addTaskSuccess = task => ({
  type: ADD_TASK_SUCCESS,
  payload: task
});

export const addTaskFailure = error => ({
  type: ADD_TASK_FAILURE,
  payload: error
});

export const addTaskAsync = task => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`tasks`, task);
      dispatch(addTaskSuccess(data))
    }
    catch (error) {
      dispatch(addTaskFailure(error))
    }
  }
};

export const getTasksByListSuccess = tasks => ({
  type: GET_TASKS_BY_LIST_SUCCESS,
  payload: tasks
});

export const getTasksByListFailure = error => ({
  type: GET_TASKS_BY_LIST_FAILURE,
  payload: error
});

export const getTasksByListAsync = listId => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`tasks/${listId}`);
      dispatch(getTasksByListSuccess(data))
    }
    catch (error) {
      dispatch(getTasksByListFailure(error))
    }
  }
};
