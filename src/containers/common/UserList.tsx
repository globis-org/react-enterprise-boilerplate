import * as React from 'react';
import { connect } from 'react-redux';

import UserListComponent, { UserListProps } from 'components/common/UserList';
import { User } from 'models';
import { State } from 'reducers';

const mapStateToProps = (state: State) => ({
  users: state.github.users,
});

interface UserListState {
  users: User[];
}

@(connect(mapStateToProps) as any)
class UserListContainer extends React.Component<UserListProps, UserListState> {
  public render() {
    return (
      <div>
        <UserListComponent users={this.props.users} />
      </div>
    );
  }
}

export default UserListContainer;
