import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { Card, Header, Image } from 'semantic-ui-react';

import { Member } from 'services/github';

import 'styles/common.css';
import './index.css';

export interface GlobisMembersProps extends InjectedTranslateProps {
  members: Member[];
  getOrganizationMembers?(): any;
}

const GlobisMembersComponent: React.SFC<GlobisProps> = ({ t, members }) => (
  <>
    <Helmet>
      <title>
        {t('pages.globisMembers.title')}
      </title>
    </Helmet>
    <div className={'Members'} data-test={'members'}>
      <Header as="h2">
        {t('pages.globisMembers.title')}
        <Header.Subheader>
          {t('pages.globisMembers.description')}
        </Header.Subheader>
      </Header>
      <Card.Group>
        {members.map((member: Member) =>
          <Card
            key={member.id}
            href={`https://github.com/${member.login}`} target="_blank"
          >
            <Card.Content>
              <Image floated="right" size="mini" src={member.avatar_url} />
              <Card.Header data-test={'card-header'}>{member.login}</Card.Header>
              <Card.Meta>GitHub ID: {member.id}</Card.Meta>
            </Card.Content>
          </Card>,
        )}
      </Card.Group>
    </div>
  </>
);

GlobisMembers.defaultProps = {
  members: [],
};

export default translate()(GlobisMembers);
