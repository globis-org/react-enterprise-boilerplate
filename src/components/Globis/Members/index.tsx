import * as React from 'react';
import { Helmet } from 'react-helmet';
import { InjectedTranslateProps, translate } from 'react-i18next';
import { Card, Header, Image } from 'semantic-ui-react';

import { Member } from 'models';

import './Members.css';

export interface GlobisProps extends InjectedTranslateProps {
  members: Member[];
  getOrganizationMembers?(): any;
}

const GlobisMembersComponent: React.SFC<GlobisProps> = ({ t, members }) => (
  <div className="Members">
    <Helmet>
      <title>{t('pages.globisMembers.title')}</title>
    </Helmet>
    <Header as="h3" block={true}>{t('pages.globisMembers.title')}</Header>
    <p>{t('introduceMembers')}</p>
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
);

GlobisMembersComponent.defaultProps = {
  members: [],
};

export default translate()(GlobisMembersComponent);
