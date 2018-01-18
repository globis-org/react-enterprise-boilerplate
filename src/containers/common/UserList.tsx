import { connect } from 'react-redux';

import UserListComponent from 'components/common/UserList';
import { State } from 'reducers';

const mapStateToProps = (state: State) => ({
  users: state.github.users,
});

export default connect(mapStateToProps)(UserListComponent);
