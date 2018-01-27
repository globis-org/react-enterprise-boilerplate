import { combineReducers } from 'redux';

import { githubReducer, GithubState } from './github';

export interface State {
  github: GithubState;
}

const rootReducer = combineReducers({
  github: githubReducer,
});

export default rootReducer;
