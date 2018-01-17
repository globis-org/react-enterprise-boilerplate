import * as React from 'react';

import { User } from 'models';

export interface UserListProps {
  users: User[];
}

const UserList: React.SFC<UserListProps> = (props) => {
  const { users } = props;

  return (
    <div>
      <p>ここに検索結果が表示される</p>
      <ul>
        {users.map((user) =>
          <li key={user.id}>{user.login}</li>,
        )}
      </ul>
    </div>
  );
};

export default UserList;
