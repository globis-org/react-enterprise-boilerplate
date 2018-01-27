import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from 'actions/github';
import { Member, User } from 'services/github';

export interface GithubState {
  members: Member[];
  users: User[];
}

const initialState: GithubState = {
  members: [],
  users: [],
 };

export const githubReducer = reducerWithInitialState(initialState)
  .case(
    actions.setMembers,
    (state, { members }) => ({ ...state, members }),
  )
  .case(
    actions.setUsers,
    (state, { users }) => ({ ...state, users }),
  );
