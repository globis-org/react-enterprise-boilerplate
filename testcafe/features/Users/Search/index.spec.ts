import { Selector } from 'testcafe';
import config from '../../../testcafe.config';

fixture('Users search page')
  .page(`${config.baseUrl}/users/search`);

test('Check the form validations', async t => {
  await t
    .click(Selector('[data-test="exec-search"]'))
    .expect(Selector('[data-test="error-message"]').exists).ok(
      'Cannot search with empty string',
    )
    .typeText(Selector('[data-test="login-name"]'), 'ABCDEFGHIJKLMNOPQ')
    .expect(Selector('[data-test="error-message"]').innerText).contains(
      '16',
      'Cannot search with 17 characters',
    );
});

test('Does search works normally?', async t => {
  await t
    .typeText(Selector('[data-test="login-name"]'), 'yuka')
    .click(Selector('[data-test="exec-search"]'))
    .expect(Selector('[data-test="user-card"]').count).gte(
      30,
      'Search result is greater or equal than 30',
    );
});
