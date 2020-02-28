import { combineReducers } from 'redux';
import boards from './boards';
import lists from './lists';
import tasks from './tasks';

const allReducers = combineReducers ({
  boards,
  lists,
  tasks
});

export default allReducers;
