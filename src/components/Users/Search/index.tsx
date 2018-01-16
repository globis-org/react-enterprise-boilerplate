import * as React from 'react';
import { Helmet } from 'react-helmet';

import UserList from '../../../containers/common/UserList';
// import UserSearchForm from './UserSearchForm';
import UserSearchForm from '../../../containers/Users/Search/UserSearchForm';

const UsersSearchComponent: React.SFC<{}> = () => (
  <div>
    <Helmet>
      <title>ユーザー検索</title>
    </Helmet>
    <UserSearchForm />
    <UserList users={[]} />
  </div>
);

export default UsersSearchComponent;
