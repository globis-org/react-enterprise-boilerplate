import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';

import UserList from 'containers/common/UserList';
import UserSearchForm from 'containers/Users/Search/UserSearchForm';

type UsersSearchComponentProps = {} & InjectedTranslateProps;

const UsersSearchComponent: React.SFC<UsersSearchComponentProps> = ({ t }) => (
  <div>
    <Helmet>
      <title>{t('pages.usersSearch.title')}</title>
    </Helmet>
    <UserSearchForm />
    <UserList />
  </div>
);

export default translate()(UsersSearchComponent);
