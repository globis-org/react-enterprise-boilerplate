import { Selector } from 'testcafe';
import config from '../testcafe.config';

fixture('Top page')
  .page(`${config.baseUrl}/`);

test('Is there the React logo?', async t => {
  await t
    .expect(Selector('[data-test="react-logo"]').exists).ok();
});

test('Are the links correct?', async t => {
  await t
    .click(Selector('[data-test="members-link"]'))
    .expect(Selector('[data-test="members"]').exists).ok(
      'Can transfer to Globis members page',
    )
    .navigateTo('/')
    .click(Selector('[data-test="search-link"]'))
    .expect(Selector('[data-test="users"]').exists).ok(
      'Can transfer to users search page',
    );
});
