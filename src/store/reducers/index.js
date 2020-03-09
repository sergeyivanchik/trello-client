import { combineReducers } from 'redux';
import boards from './boards';
import lists from './lists';
import tasks from './tasks';
import spinner from './spinner';
import users from './users';

const allReducers = combineReducers ({
  boards,
  lists,
  tasks,
  spinner,
  users
});

export default allReducers;
