import { combineReducers } from 'redux';
import boards  from './boards.js';

const allReducers = combineReducers ({
  boards
});

export default allReducers;
