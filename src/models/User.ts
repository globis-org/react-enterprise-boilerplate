import { User } from 'services/github';

export { User };

export const defaultUser: User = {
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
