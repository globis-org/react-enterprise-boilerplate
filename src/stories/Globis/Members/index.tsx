import { withInfo } from '@storybook/addon-info';
import { array, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import GlobisMembers from 'components/Globis/Members';
import i18n from 'i18n';
import { Member } from 'services/github';
import * as data from 'services/github/__tests__/fixtures/members.json';

const members: Member[] = (data as any);

storiesOf('Globis Members', module)
  .addDecorator(story => (
    <I18nextProvider i18n={i18n}>
      {story() as JSX.Element}
    </I18nextProvider>
  ))
  .addDecorator(withKnobs)
  .add(
    'With some members',
    withInfo(
      `You can show a certain organization's members with card UI by passing "Member" object array as property.`,
    )(
      () => (
        <GlobisMembers members={array('Members', members)} />
      ),
    ),
  );
