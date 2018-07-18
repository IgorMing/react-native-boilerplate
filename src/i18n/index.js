import i18n from 'i18next';
import Expo from 'expo';

import en from './en';
import pt from './pt';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => Expo.DangerZone.Localization.getCurrentLocaleAsync().then((lng) => { callback(lng.replace('_', '-')); }),
  init: () => { },
  cacheUserLanguage: () => { }
};
i18n
  .use(languageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en,
      pt
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
