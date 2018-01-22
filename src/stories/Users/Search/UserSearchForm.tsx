import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';

import UserSearchForm from 'components/Users/Search/UserSearchForm';
import i18n from 'i18n';

storiesOf('Users Search Form', module)
  .addDecorator(story => (
    <I18nextProvider i18n={i18n}>
      {story() as JSX.Element}
    </I18nextProvider>
  ))
  .addDecorator(withKnobs)
  .add('Default status', withInfo(
    'User Search Form default status',
  )(
    () => (
      <UserSearchForm />
    )),
  );
