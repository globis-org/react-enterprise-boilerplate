import * as i18n from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import * as XHR from 'i18next-xhr-backend';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ja',
    whitelist: ['ja'],
    ns: ['common'],
    defaultNS: 'common',
    debug: true,
    backend: {
      loadPath: '../locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
