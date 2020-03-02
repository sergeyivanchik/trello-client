import { combineReducers } from 'redux';
import boards from './boards';
import lists from './lists';
import tasks from './tasks';
import spinner from './spinner';

const allReducers = combineReducers ({
  boards,
  lists,
  tasks,
  spinner
});

export default allReducers;
