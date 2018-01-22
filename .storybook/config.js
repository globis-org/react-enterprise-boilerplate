/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';

const req = require.context('../src/stories', true, /\.(ts$|tsx$)/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
