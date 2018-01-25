import { Selector } from 'testcafe';
import config from '../testcafe.config';
import { dt } from '../utils';

fixture('Top page')
  .page(`${config.baseUrl}/`);

test('Is there the React logo?', async t => {
  await t
    .expect(Selector(dt('react-logo')).exists).ok();
});

test('Are the links correct?', async t => {
  await t
    .click(Selector(dt('members-link')))
    .expect(Selector(dt('members')).exists).ok(
      'Can transfer to Globis members page',
    )
    .navigateTo('/')
    .click(Selector(dt('search-link')))
    .expect(Selector(dt('users')).exists).ok(
      'Can transfer to users search page',
    );
});
