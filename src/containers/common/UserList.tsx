import * as React from 'react';

import UserListComponent, { UserListProps } from '../../components/common/UserList';
import User from '../../models/User';

interface UserListState {
  users: User[];
}

class UserListContainer extends React.Component<UserListProps, UserListState> {
  public componentWillReceiveProps (nextProps: UserListProps) {
    if (nextProps.users !== this.props.users) {
      this.setState({ users: this.props.users });
    }
  }

  public render() {
    return (
      <div>
        <UserListComponent users={this.state.users} />
      </div>
    );
  }
}

export default UserListContainer;
