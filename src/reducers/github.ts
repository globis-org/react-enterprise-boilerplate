import { Reducer } from 'redux';

import { GitHubAction } from 'actions/github';
import * as constants from 'constants/github';
import * as Model from 'models';

export interface GithubState {
  members: Model.Member[];
  users: Model.User[];
}

const initialState = {
  members: [],
  users: [],
 };

const githubReducer: Reducer<GithubState> = (
  state: GithubState = initialState,
  action: GitHubAction,
) => {
  switch (action.type) {
  case constants.SET_MEMBERS:
    return {
      ...state,
      members: action.payload.members,
    };
  case constants.SET_USERS:
    return {
      ...state,
      users: action.payload.users,
    };
  default:
    return state;
  }
};

export default githubReducer;
