import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { searchUsers } from '../../../actions/github';
import UserSearchFormComponent from '../../../components/Users/Search/UserSearchForm';

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onSubmit: () => dispatch(searchUsers()),
});

/*
const popAlert = () => {
  alert(JSON.stringify('外の関数が呼ばれました', null, 2));
};

const UserSearchFormContainer: React.SFC<{}> = () => (
   <UserSearchFormComponent onSubmit={popAlert} />
);
*/

const UserSearchFormContainer = connect(null, mapDispatchToProps)(UserSearchFormComponent);

export default UserSearchFormContainer;
