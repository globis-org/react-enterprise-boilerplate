import * as React from 'react';

import UserList from '../../../components/common/UserList';
import UserSearchForm from './UserSearchForm';

const UsersSearchComponent: React.SFC<{}> = () => (
  <div>
    <UserSearchForm />
    <UserList users={[]} />
  </div>
);

export default UsersSearchComponent;
