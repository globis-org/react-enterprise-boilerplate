import * as React from 'react';

import UserList from '../../../components/common/UserList';
import UserSearchForm from './UserSearchForm';

class UsersSearchComponent extends React.Component {
  public render() {
    return (
      <div>
        <UserSearchForm onSubmit={() => console.log('call')} />
        <UserList users={[]} />
      </div>
    );
  }
}

export default UsersSearchComponent;
