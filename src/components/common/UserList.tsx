import * as React from 'react';
import { Card, Image } from 'semantic-ui-react';

import { User } from 'services/github';

export interface UserListProps {
  users: User[];
}

const UserList: React.SFC<UserListProps> = ({ users }) => (
  <Card.Group data-test={'users'}>
    {users.map((user) =>
      <Card
        key={user.id}
        href={`https://github.com/${user.login}`} target="_blank"
      >
        <Card.Content data-test={'user-card'}>
          <Image floated="right" size="mini" src={user.avatar_url} />
          <Card.Header>{user.login}</Card.Header>
          <Card.Meta>GitHub ID: {user.id}</Card.Meta>
          <Card.Description>
            Matching score: {user.score}
          </Card.Description>
        </Card.Content>
      </Card>,
    )}
  </Card.Group>
);

export default UserList;
