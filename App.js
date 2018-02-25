import React from 'react';
import { Provider } from 'react-redux';

import store from './Store';
import MainNavigator from './src/MainNavigator';

export default () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);
