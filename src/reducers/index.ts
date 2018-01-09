import { combineReducers } from 'redux';
import githubReducer from './github';

const combinedReducer = combineReducers({
  githubReducer,
});

export default combinedReducer;
