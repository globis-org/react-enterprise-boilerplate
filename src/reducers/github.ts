import { Reducer } from 'redux';

import { GitHubAction } from '../actions/github';
import * as constants from '../actions/github';
import Member, { defaultMember } from '../models/Member';

export interface GithubState {
  members: Member[];
}

const initialState = { members: [defaultMember] };

const githubReducer: Reducer<GithubState> = (
  state: GithubState = initialState,
  action: GitHubAction,
) => {
  switch (action.type) {
  case constants.SET_MEMBERS:
    return {
      members: action.payload.members,
    };
  case constants.FETCH_MEMBERS:
    return {
      members: action.payload.members,
    };
  default:
    return state;
  }
};

export default githubReducer;
