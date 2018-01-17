import { Reducer } from 'redux';

import { GitHubAction } from 'actions/github';
import * as constants from 'constants/github';
import Member, { defaultMember } from 'models/Member';
import User, { defaultUser } from 'models/User';

export interface GithubState {
  members: Member[];
  users: User[];
}

const initialState = {
  members: [defaultMember],
  users: [defaultUser],
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
