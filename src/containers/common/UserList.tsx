import * as React from 'react';
import { connect } from 'react-redux';

import UserListComponent, { UserListProps } from '../../components/common/UserList';
import User from '../../models/User';
import { State } from '../../reducers';

const mapStateToProps = (state: State) => ({
  users: state.github.users,
});

interface UserListState {
  users: User[];
}

@(connect(mapStateToProps) as any)
class UserListContainer extends React.Component<UserListProps, UserListState> {
  public componentWillReceiveProps(nextProps: UserListProps) {
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
