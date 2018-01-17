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

/*
const popAlert = () => {
  alert(JSON.stringify('外の関数が呼ばれました', null, 2));
};

const UserSearchFormContainer: React.SFC<{}> = () => (
   <UserSearchFormComponent onSubmit={popAlert} />
);
*/

const UserSearchFormContainer = connect(null, mapDispatchToProps)(UserSearchFormComponent as any);

export default UserSearchFormContainer;
