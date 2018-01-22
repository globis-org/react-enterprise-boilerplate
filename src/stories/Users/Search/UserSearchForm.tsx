import { withInfo } from '@storybook/addon-info';
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
  .add('Mock form', withInfo(
    'A form for searching users with name',
  )(
    () => (
      <UserSearchForm />
    )),
  );
