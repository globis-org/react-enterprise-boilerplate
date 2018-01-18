import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { Header } from 'semantic-ui-react';

import UserList from 'containers/common/UserList';
import UserSearchForm from 'containers/Users/Search/UserSearchForm';

import './UserSearch.css';

type UsersSearchComponentProps = {} & InjectedTranslateProps;

const UsersSearchComponent: React.SFC<UsersSearchComponentProps> = ({ t }) => (
  <div className="UserSearch">
    <Helmet>
      <title>{t('pages.usersSearch.title')}</title>
    </Helmet>
    <Header as="h3" block>{t('pages.usersSearch.title')}</Header>
    <UserSearchForm />
    <UserList />
  </div>
);

export default translate()(UsersSearchComponent);
