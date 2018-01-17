import { ThunkAction } from 'redux-thunk';

import * as constants from 'constants/github';
import * as Model from 'models';
import { GitHubApi } from 'services/github';
import { AbstractAction } from './';

export interface GitHubAction extends AbstractAction {
  payload: {
    members: Model.Member[],
    users: Model.User[],
  };
}

// Set Members
export const setMembers = (members: Model.Member[]) => ({
  type: constants.SET_MEMBERS,
  payload: { members },
});

// Set Members
export const setUsers = (users: Model.User[]) => ({
  type: constants.SET_USERS,
  payload: { users },
});

// Get Organization Members
export const getOrgMembers = (): ThunkAction<void, {}, {}> =>
async (dispatch) => {
  let members: Model.Member[] = [];

  try {
    const api = new GitHubApi();
    members = await api.getOrganizationMembers('globis-org');
  } catch (err) {
    console.log(err.message);
  }

  dispatch(setMembers(members));
};

// Search Users
export const searchUsers = (login: string): ThunkAction<void, {}, {}> =>
async (dispatch) => {
  let users: Model.User[] = [];

  try {
    const api = new GitHubApi();
    users = await api.searchUsers(login);
  } catch (err) {
    console.log(err.message);
  }

  dispatch(setUsers(users));
};
