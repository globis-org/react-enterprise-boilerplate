import * as React from 'react';
import { Link } from 'react-router-dom';

class SearchUsersContainer extends React.Component {
  public render() {
    return (
      <div>
        <ul>
          <li><Link to={'/globis/members'}>グロービスのメンバー</Link></li>
          <li><Link to={'/users/search'}>ユーザー検索</Link></li>
        </ul>
      </div>
    );
  }
}

export default SearchUsersContainer;
