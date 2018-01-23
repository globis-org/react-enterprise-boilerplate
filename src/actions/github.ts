import { ThunkAction } from 'redux-thunk';

import * as constants from 'constants/github';
import { GitHubApi, Member, User } from 'services/github';
import { AbstractAction } from './';

export interface GitHubAction extends AbstractAction {
  payload: {
    members: Member[],
    users: User[],
  };
}

// Set Members
export const setMembers = (members: Member[]) => ({
  type: constants.SET_MEMBERS,
  payload: { members },
});

// Set Members
export const setUsers = (users: User[]) => ({
  type: constants.SET_USERS,
  payload: { users },
});

// Get Organization Members
export const getOrganizationMembers = (): ThunkAction<void, {}, {}> =>
async (dispatch) => {
  let members: Member[] = [];

  try {
    const api = new GitHubApi();
    members = await api.getOrganizationMembers('globis-org');
  } catch (err) {
    throw(err);
  }

  dispatch(setMembers(members));
};

// Search Users
export const searchUsers = (login: string): ThunkAction<void, {}, {}> =>
async (dispatch) => {
  let users: User[] = [];

  try {
    const api = new GitHubApi();
    users = await api.searchUsers(login);
  } catch (err) {
    throw(err);
  }

  dispatch(setUsers(users));
};
