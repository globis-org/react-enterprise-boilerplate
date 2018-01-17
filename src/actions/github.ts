import { ThunkAction } from 'redux-thunk';

import * as constants from 'constants/github';
import Member from 'models/Member';
import User from 'models/User';
import GitHubApi from 'services/github/api';
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
export const getOrgMembers = (): ThunkAction<void, {}, {}> =>
async (dispatch) => {
  let members: Member[] = [];

  try {
    const api = new GitHubApi();
    members = await api.getOrgMembers('globis-org');
    dispatch(setMembers(members));
  } catch (err) {
    console.log(err.message);
  }
};

// Search Users
export const searchUsers = (login: string): ThunkAction<void, {}, {}> =>
async (dispatch) => {
  let users: User[] = [];

  try {
    const api = new GitHubApi();
    users = await api.searchUsers(login);
    dispatch(setUsers(users));
  } catch (err) {
    console.log(err.message);
  }
};
