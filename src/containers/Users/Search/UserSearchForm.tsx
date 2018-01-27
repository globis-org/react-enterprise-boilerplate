import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { searchUsers } from 'actions/github';
import UserSearchForm from 'components/Users/Search/UserSearchForm';

const mapDispatchToProps = (dispatch: Dispatch<{}>) => bindActionCreators(
  {
    onSubmit: searchUsers,
  },
  dispatch,
);

export default connect<any>(null, mapDispatchToProps)(UserSearchForm);
