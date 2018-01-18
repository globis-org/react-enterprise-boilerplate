import * as i18next from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import * as XHR from 'i18next-xhr-backend';

const i18n = i18next
  .use(XHR)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ja',
    whitelist: ['en', 'ja'],
    nonExplicitWhitelist: true,
    ns: ['common'],
    defaultNS: 'common',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      wait: true,  // true: wait for loaded in every translated hoc
    },
  });

export default i18n;
