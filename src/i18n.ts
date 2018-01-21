import * as i18next from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';

import { genI18nResources } from './utils/localeHandler';

const resources = genI18nResources(
  require.context('../locales', true, /\.json$/),
);

const i18n = i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ja',
    whitelist: ['en', 'ja'],
    nonExplicitWhitelist: true,
    debug: process.env !== 'production',
    resources,
    react: {
      wait: true,
    },
  });

export default i18n;
