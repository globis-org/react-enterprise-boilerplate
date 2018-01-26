import { Selector } from 'testcafe';
import config from '../../../testcafe.config';
import { dt } from '../../../utils';

fixture('Globis members page')
  .page(`${config.baseUrl}/globis/members`);

test('Is there @oukayuka in the members?', async t => {
  const target = Selector(dt('card-header')).withText('oukayuka');
  await t
    .expect(target.exists).ok(
      'Exists @oukayuka',
    );
});
