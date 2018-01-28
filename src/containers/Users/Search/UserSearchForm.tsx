import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { searchUsers } from 'actions/github';
import UserSearchForm from 'components/Users/Search/UserSearchForm';
import { State } from 'reducers';

const mapDispatchToProps = (dispatch: Dispatch<State>) => (
  bindActionCreators(
    { searchUsers },
    dispatch,
  )
);

export default connect<any>(null, mapDispatchToProps)(UserSearchForm);
