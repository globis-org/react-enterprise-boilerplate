import * as i18next from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';

import * as resources from './locales';  // Use relative path for Storybook

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
