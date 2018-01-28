import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from 'actions/github';
import { Member, User } from 'services/github';

export interface GithubState {
  members: Member[];
  users: User[];
  usersSearchStatus: null | 'searching' | 'failed';
}

const initialState: GithubState = {
  members: [],
  users: [],
  usersSearchStatus: null,
 };

export const githubReducer = reducerWithInitialState(initialState)
  .case(
    actions.setMembers,
    (state, { members }) => ({ ...state, members }),
  )
  .case(
    actions.searchUsers.started,
    (state) => ({ ...state, usersSearchStatus: 'searching' }),
  )
  .case(
    actions.searchUsers.failed,
    (state) => ({ ...state, usersSearchStatus: 'failed' }),
  )
  .case(
    actions.searchUsers.done,
    (state, payload) => ({
      ...state,
      users: payload.result.users,
      usersSearchStatus: null,
    }),
  );
