import { connect } from 'react-redux';

import UserList from 'components/common/UserList';
import { State } from 'reducers';

const mapStateToProps = (state: State) => ({
  users: state.github.users,
  isSearching: state.github.usersSearchStatus === 'searching',
});

export default connect(mapStateToProps)(UserList as any);
