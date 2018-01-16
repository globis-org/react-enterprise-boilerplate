import * as React from 'react';
import { Helmet } from 'react-helmet';

import Member from '../../../models/Member';

interface GlobisProps {
  members: Member[];
  getOrgMembers?(): any;
}

class GlobisComponent extends React.Component<GlobisProps, {}> {
  public static defaultProps = {
    members: [],
  };

  public render() {
    return (
      <div>
        <Helmet>
          <title>社員紹介</title>
        </Helmet>
        <p>
          グロービスの社員を紹介します。
        </p>
        <ul>
          {this.props.members.map((member: Member) =>
            <li key={member.id}>{member.login}</li>,
          )}
          {this.props.members.map}
        </ul>
      </div>
    );
  }
}

export default GlobisComponent;
