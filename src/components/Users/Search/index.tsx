import * as React from 'react';

import UserList from '../../../components/common/UserList';
import { InnerForm } from './UserSearchForm';

const UsersSearchComponent: React.SFC<{}> = () => (
  <div>
    <InnerForm onSubmit={() => console.log('test')} />
    <UserList users={[]} />
  </div>
);

export default UsersSearchComponent;
