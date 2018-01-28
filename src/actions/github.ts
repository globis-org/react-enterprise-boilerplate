import actionCreatorFactory from 'typescript-fsa';

import { Member, User } from 'services/github';

const actionCreator = actionCreatorFactory('GITHUB');

export const loadMembers = actionCreator<{
  organization: string,
}>('LOAD_MEMBERS');

export const setMembers = actionCreator<{
  members: Member[],
}>('SET_MEMBERS');

export const searchUsers = actionCreator.async<
  string, // query (params)
  User[], // (result)
  Error   // (error)
>('SEARCH_USERS');
