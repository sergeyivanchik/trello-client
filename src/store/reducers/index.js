import { combineReducers } from 'redux';
import boards from './boards';
import lists from './lists';

const allReducers = combineReducers ({
  boards,
  lists
});

export default allReducers;
