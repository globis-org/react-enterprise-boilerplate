import * as React from 'react';

import { User } from 'models';

export interface UserListProps {
  users: User[];
}

const UserList: React.SFC<UserListProps> = (props) => {
  const { users } = props;

  return (
    <div>
      <ul>
        {users.map((user) =>
          <li key={user.id}>{user.login}</li>,
        )}
      </ul>
    </div>
  );
};

export default UserList;
