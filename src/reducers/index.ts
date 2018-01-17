import { combineReducers } from 'redux';

import github, { GithubState } from './github';

export interface State {
  github: GithubState;
}

const combinedReducer = combineReducers({
  github,
});

export default combinedReducer;
