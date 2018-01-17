import * as React from 'react';
import { Helmet } from 'react-helmet';

import UserList from 'containers/common/UserList';
import UserSearchForm from 'containers/Users/Search/UserSearchForm';
import pages from 'pages';

const UsersSearchComponent: React.SFC<{}> = () => (
  <div>
    <Helmet>
      <title>{pages.searchUsers.title}</title>
    </Helmet>
    <UserSearchForm />
    <UserList users={[]} />
  </div>
);

export default UsersSearchComponent;
