import { ThunkAction } from 'redux-thunk';

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
export const fetchMembers = (): ThunkAction<void, {}, {}> =>
async (dispatch) => {
  let members: Member[] = [];

  try {
    const response = await GitHubApi.getOrgMembers('globis-org');
    members = response.data;
  } catch (err) {
    console.log('error occurred!');
  }
  
  dispatch(setMembers(members));
};
