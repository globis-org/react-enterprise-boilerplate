import { withInfo } from '@storybook/addon-info';
import { array, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import GlobisMembers from 'components/Globis/Members';
import i18n from 'i18n';
import { Member } from 'services/github';
import * as data from 'services/github/test/fixtures/members.json';

const members: Member[] = (data as any);

storiesOf('Globis Members', module)
  .addDecorator(story => (
    <I18nextProvider i18n={i18n}>
      {story() as JSX.Element}
    </I18nextProvider>
  ))
  .addDecorator(withKnobs)
  .add('With empty member', withInfo(
    'Member list with empty members',
  )(
    () => (
      <GlobisMembers members={array('Members', members)} />
    )),
  );
