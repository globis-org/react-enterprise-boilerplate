import { withInfo } from '@storybook/addon-info';
import { array, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import UserList from 'components/common/UserList';
import i18n from 'i18n';
import { User } from 'services/github';
import * as data from 'services/github/test/fixtures/users.json';

const users: User[] = (data as any);

storiesOf('User List', module)
  .addDecorator(story => (
    <I18nextProvider i18n={i18n}>
      {story() as JSX.Element}
    </I18nextProvider>
  ))
  .addDecorator(withKnobs)
  .add(
    'With some users',
    withInfo(
      `You can show GitHub users with card UI by passing "User" object array as property.`,
    )(
      () => (
        <UserList users={array('Users', users)} />
      ),
    ),
  );
