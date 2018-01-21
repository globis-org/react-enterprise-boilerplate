import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import { Member } from 'services/github';
import GlobisMembers from '../../../components/Globis/Members';
import i18n from '../../../i18n';

const members: Member[] = [];

storiesOf('Globis Members', module)
  .addDecorator(story => (
    <I18nextProvider i18n={i18n}>
      {story() as JSX.Element}
    </I18nextProvider>
  ))
  .add('With empty member', withInfo(
    'Member list with empty members',
  )(
    () => (
      <GlobisMembers members={members} />
    )),
  );
