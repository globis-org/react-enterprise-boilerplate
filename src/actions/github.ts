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
  { query: string },
  { users: User[] },
  Error
>('SEARCH_USERS');
