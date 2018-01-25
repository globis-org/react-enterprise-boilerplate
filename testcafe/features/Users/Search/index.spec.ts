import { Selector } from 'testcafe';
import config from '../../../testcafe.config';
import { dt } from '../../../utils';

fixture('Users search page')
  .page(`${config.baseUrl}/users/search`);

test('Check the form validations', async t => {
  await t
    .click(Selector(dt('exec-search')))
    .expect(Selector(dt('error-message')).exists).ok(
      'Cannot search with empty string',
    )
    .typeText(Selector(dt('login-name')), 'ABCDEFGHIJKLMNOPQ')
    .expect(Selector(dt('error-message')).innerText).contains(
      '16',
      'Cannot search with 17 characters',
    );
});

test('Does search works normally?', async t => {
  await t
    .typeText(Selector(dt('login-name')), 'yuka')
    .click(Selector(dt('exec-search')))
    .expect(Selector(dt('user-card')).count).gte(
      30,
      'Search result is greater or equal than 30',
    );
});
