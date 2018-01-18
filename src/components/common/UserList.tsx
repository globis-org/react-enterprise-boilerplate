import * as React from 'react';
import { Card, Image } from 'semantic-ui-react';

import { User } from 'models';

export interface UserListProps {
  users: User[];
}

const UserList: React.SFC<UserListProps> = (props) => {
  const { users } = props;

  return (
    <Card.Group>
      {users.map((user) =>
        <Card key={user.id}>
          <Card.Content>
            <Image floated="right" size="mini" src={user.avatar_url} />
            <Card.Header>{user.login}</Card.Header>
            <Card.Meta>GitHub ID: {user.id}</Card.Meta>
            <Card.Description>
              GitHub Score: {user.score}
            </Card.Description>
          </Card.Content>
        </Card>,
      )}
    </Card.Group>
  );
};

export default UserList;
