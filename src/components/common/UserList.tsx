import * as React from 'react';
import { Card, Image, Loader } from 'semantic-ui-react';

import { User } from 'services/github';

export interface UserListProps {
  users: User[];
  isSearching?: boolean;
}

const UserList: React.SFC<UserListProps> = ({
  users,
  isSearching,
}) => {
  return isSearching ?
  (
    <Loader
      active={true}
      inline={'centered'}
      size={'medium'}
      >
      Loading...
    </Loader>
  ) :
  (
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
};

export default UserList;
