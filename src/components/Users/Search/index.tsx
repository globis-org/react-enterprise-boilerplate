import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { Header } from 'semantic-ui-react';

import UserList from 'containers/common/UserList';
import UserSearchForm from 'containers/Users/Search/UserSearchForm';

import 'common.css';
import './index.css';

type UsersSearchProps = {} & InjectedTranslateProps;

const UsersSearch: React.SFC<UsersSearchProps> = ({ t }) => (
  <div className="UserSearch">
    <Helmet>
      <title>
        {t('pages.usersSearch.title')}
      </title>
    </Helmet>
    <Header as="h2">
      {t('pages.usersSearch.title')}
      <Header.Subheader>
        {t('pages.usersSearch.description')}
      </Header.Subheader>
    </Header>
    <UserSearchForm />
    <UserList />
  </div>
);

export default translate()(UsersSearch);
