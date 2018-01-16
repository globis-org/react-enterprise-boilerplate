import Member from '../services/github/models/Member';

export default Member;

export const defaultMember: Member = {
  login: '',
  id: 0,
  avatar_url: '',
  gravatar_id: '',
  url: '',
  html_url: '',
  followers_url: '',
  following_url: '',
  gists_url: '',
  starred_url: '',
  subscriptions_url: '',
  organizations_url: '',
  repos_url: '',
  score: 0,
  events_url: '',
  received_events_url: '',
  type: '',
  site_admin: false,
};

export const dummyMember: Member = {
  login: 'グロービス太郎',
  id: 1,
  avatar_url: '',
  gravatar_id: '',
  url: '',
  html_url: '',
  followers_url: '',
  following_url: '',
  gists_url: '',
  starred_url: '',
  subscriptions_url: '',
  organizations_url: '',
  repos_url: '',
  score: 0,
  events_url: '',
  received_events_url: '',
  type: '',
  site_admin: false,
};
