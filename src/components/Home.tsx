import * as React from 'react';
import { translate } from 'react-i18next';
import { InjectedTranslateProps } from 'react-i18next/src/props';
import { Link } from 'react-router-dom';

import pages from 'pages';

type HomeProps = {} & InjectedTranslateProps;

const Home: React.SFC<HomeProps> = ({ t }) => (
  <>
    <ul>
      <li>
        <Link
          to={pages.globisMembers.path}
          data-test={'members-link'}
        >
          {t('pages.globisMembers.title')}
        </Link>
      </li>
      <li>
        <Link
          to={pages.usersSearch.path}
          data-test={'search-link'}
        >
          {t('pages.usersSearch.title')}
        </Link>
      </li>
    </ul>
  </>
);

export default translate()(Home);
