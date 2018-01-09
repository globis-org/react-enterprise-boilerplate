import { Reducer } from 'redux';

import * as constants from '../actions/github';
import { SetMembersAction } from '../actions/github';
import Member, { defaultMember } from '../models/Member';

export interface GithubState {
  members: Member[];
}

const initialState = { members: [defaultMember] };

const githubReducer: Reducer<GithubState> = (
  state: GithubState = initialState,
  action: SetMembersAction,
) => {
  console.log('======================');
  console.log(action);

  switch (action.type) {
  case constants.SET_MEMBERS:
    return {
      members: action.members,
    };
  default:
    return state;
  }
};

export default githubReducer;
