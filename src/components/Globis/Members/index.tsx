import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { Card, Header, Image } from 'semantic-ui-react';

import { Member } from 'services/github';

import './Members.css';

export interface GlobisProps extends InjectedTranslateProps {
  members: Member[];
  getOrganizationMembers?(): any;
}

const GlobisMembersComponent: React.SFC<GlobisProps> = ({ t, members }) => (
  <div>
    <Helmet>
      <title>
        {t('pages.globisMembers.title')}
      </title>
    </Helmet>
    <div className={'Members'}>
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
              <Card.Header>{member.login}</Card.Header>
              <Card.Meta>GitHub ID: {member.id}</Card.Meta>
            </Card.Content>
          </Card>,
        )}
      </Card.Group>
    </div>
  </div>
);

GlobisMembersComponent.defaultProps = {
  members: [],
};

export default translate()(GlobisMembersComponent);
