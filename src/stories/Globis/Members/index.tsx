import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import GlobisMembers from 'components/Globis/Members';
import i18n from 'i18n';
import { Member } from 'models';

const members: Member[] = [];

storiesOf('GlobisMembers', module)
  .add('empty', () => (
    <I18nextProvider i18n={i18n}>
      <GlobisMembers members={members} />
    </I18nextProvider>
  ),
);
