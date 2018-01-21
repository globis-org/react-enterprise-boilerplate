import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { searchUsers } from 'actions/github';
import UserSearchFormComponent from 'components/Users/Search/UserSearchForm';

const mapDispatchToProps = (dispatch: Dispatch<{}>) => bindActionCreators(
  {
    onSubmit: searchUsers,
  },
  dispatch,
);

const UserSearchFormContainer = connect(null, mapDispatchToProps)(UserSearchFormComponent as any);

export default UserSearchFormContainer;
