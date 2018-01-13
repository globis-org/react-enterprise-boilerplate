import * as React from 'react';

import { UserList, UserSearchForm } from '../../components';

class SearchUsers extends React.Component {
  public render() {
    return (
      <div>
        <UserSearchForm onSubmit={() => console.log('call')} />
        <UserList users={[]} />
      </div>
    );
  }
}

export default SearchUsers;
