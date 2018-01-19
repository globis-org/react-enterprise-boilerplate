// import './Globis/Members';

import { storiesOf } from '@storybook/react';
import * as React from 'react';

import GlobisMembers from '../components/Globis/Members';
import { Member } from '../models';

const members: Member[] = [];

storiesOf('GlobisMembers', module)
  .add('empty', () => (
    <GlobisMembers members={members} />
  ),
);
