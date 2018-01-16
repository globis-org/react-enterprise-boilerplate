import * as React from 'react';

import UserList from '../../../components/common/UserList';
// import UserSearchForm from './UserSearchForm';
import UserSearchForm from '../../../containers/Users/Search/UserSearchForm';

const UsersSearchComponent: React.SFC<{}> = () => (
  <div>
    <UserSearchForm />
    <UserList users={[]} />
  </div>
);

export default UsersSearchComponent;
