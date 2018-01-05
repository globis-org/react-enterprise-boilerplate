import { combineReducers } from 'redux';
import github from './github';

const todoApp = combineReducers({
  github,
});

export default todoApp;
