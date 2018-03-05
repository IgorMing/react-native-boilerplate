import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider, translate } from 'react-i18next';

import i18n from './src/i18n';

import store from './Store';
import MainNavigator from './src/MainNavigator';

const WrappedStack = () => <MainNavigator screenProps={{ t: i18n.getFixedT() }} />;

const ReloadAppOnLanguageChange = translate('translation', {
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedStack);

export default () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ReloadAppOnLanguageChange />
    </I18nextProvider>
  </Provider>
);
