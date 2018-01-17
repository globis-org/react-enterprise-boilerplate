import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Member } from 'models';

export interface GlobisProps {
  members: Member[];
  getOrgMembers?(): any;
}

const GlobisComponent: React.SFC<GlobisProps> = (props) => (
  <div>
  <Helmet>
    <title>社員紹介</title>
  </Helmet>
  <p>
    グロービスの社員を紹介します。
  </p>
  <ul>
    {props.members.map((member: Member) =>
      <li key={member.id}>{member.login}</li>,
    )}
  </ul>
  </div>
);

GlobisComponent.defaultProps = {
  members: [],
};

export default GlobisComponent;
