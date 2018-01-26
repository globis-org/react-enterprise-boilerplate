import * as React from 'react';
import { translate } from 'react-i18next';
import { InjectedTranslateProps } from 'react-i18next/src/props';
import { Link } from 'react-router-dom';

import pages from 'pages';

type HomeComponentProps = {} & InjectedTranslateProps;

const HomeComponent: React.SFC<HomeComponentProps> = (
  { t },
) => (
  <>
    <ul>
      <li><Link to={pages.globisMembers.path}>{t('pages.globisMembers.title')}</Link></li>
      <li><Link to={pages.usersSearch.path}>{t('pages.usersSearch.title')}</Link></li>
    </ul>
  </>
);

export default translate()(HomeComponent);
