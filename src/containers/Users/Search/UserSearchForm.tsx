import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { searchUsers } from 'actions/github';
import UserSearchForm from 'components/Users/Search/UserSearchForm';
import { State } from 'reducers';

const mapStateToProps = (state: State) => ({
  isSearching: state.github.usersSearchStatus === 'searching',
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => (
  bindActionCreators(
    { onSubmit: (query) => searchUsers.started({ query }) },
    dispatch,
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(UserSearchForm);
