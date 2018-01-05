import { Action } from 'redux';

import Member from '../models/Member';

export const SET_MEMBERS = 'SET_MEMBERS';
export interface SetMembersAction extends Action {
  members: Member[];
}
