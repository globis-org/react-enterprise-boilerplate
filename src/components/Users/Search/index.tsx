import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';

import UserList from 'containers/common/UserList';
import UserSearchForm from 'containers/Users/Search/UserSearchForm';

const UsersSearchComponent: React.SFC<InjectedTranslateProps> = ({ t }) => (
  <div>
    <Helmet>
      <title>{t('pages.usersSearch.title')}</title>
    </Helmet>
    <UserSearchForm />
    <UserList users={[]} />
  </div>
);

export default translate()(UsersSearchComponent);
