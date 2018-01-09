import { Action } from 'redux';

import Member from '../models/Member';

export const SET_MEMBERS = 'SET_MEMBERS';
export interface SetMembersAction extends Action {
  members: Member[];
}

export const setMembers = (members: Member[]) => {
  console.log(`####################`);

  return {
    type: SET_MEMBERS,
    members,
  };
};
