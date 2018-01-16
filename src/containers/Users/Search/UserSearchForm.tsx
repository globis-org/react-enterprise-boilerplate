import * as React from 'react';

import UserSearchFormComponent from '../../../components/Users/Search/UserSearchForm';

const popAlert = () => {
  alert(JSON.stringify('外の関数が呼ばれました', null, 2));
};

const UserSearchFormContainer: React.SFC<{}> = () => (
   <UserSearchFormComponent onSubmit={popAlert} />
);

export default UserSearchFormContainer;
