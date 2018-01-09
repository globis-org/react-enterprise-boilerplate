import { call, put } from 'redux-saga/effects';

import Member from '../models/Member';
import GitHubApi from '../services/github/api';
import { AbstractAction } from './';

export interface GitHubAction extends AbstractAction {
  payload: {
    members: Member[],
  };
}

// Set Members
export const SET_MEMBERS = 'SET_MEMBERS';
export const setMembers = (members: Member[]) => ({
  type: SET_MEMBERS,
  payload: { members },
});

// Fetch Members
export const FETCH_MEMBERS = 'FETCH_MEMBERS';
export function *fetchMembers () {
  try {
    const response = yield call(GitHubApi.getOrgMembers, 'globis-org');
    const successAction: GitHubAction = {
      type: FETCH_MEMBERS,
      payload: { members: (response.data as Member[]) },
      error: false,
    };
    yield put(successAction);

  } catch (err) {
    const failedAction: GitHubAction = {
      type: FETCH_MEMBERS,
      payload: { members: [] },
      error: true,
    };
    yield put (failedAction);
  }
}
