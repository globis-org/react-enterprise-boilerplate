import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';

import { Member } from 'models';

export interface GlobisProps extends InjectedTranslateProps {
  members: Member[];
  getOrganizationMembers?(): any;
}

const GlobisComponent: React.SFC<GlobisProps> = ({ t, members }) => (
  <div>
  <Helmet>
    <title>{t('pages.globisMembers.title')}</title>
  </Helmet>
  <p>{t('introduceMembers')}</p>
  <ul>
    {members.map((member: Member) =>
      <li key={member.id}>{member.login}</li>,
    )}
  </ul>
  </div>
);

GlobisComponent.defaultProps = {
  members: [],
};

export default translate()(GlobisComponent);
