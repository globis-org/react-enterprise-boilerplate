import { Selector } from 'testcafe';
import config from '../../../testcafe.config';

fixture('Globis members page')
  .page(`${config.baseUrl}/globis/members`);

test('Is there @oukayuka in the members?', async t => {
  const target = Selector('.header').withText('oukayuka');
  await t
    .expect(target.exists).ok(
      'Exists @oukayuka',
    );
});
