import * as React from 'react';

export interface UserSearchFormProps {
  onSubmit: () => any;
}

const UserSearchForm: React.SFC<UserSearchFormProps> = (props) => {
  return (
    <div>
      <p>フォーム</p>
    </div>
  );
};

export default UserSearchForm;
