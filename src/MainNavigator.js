import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

export default class Navigator extends Component {
  componentDidMount() {

  }

  render() {
    const MainStackNavigator = StackNavigator({
      Login: { screen: LoginScreen },
      Home: { screen: HomeScreen }
    });

    return <MainStackNavigator />;
  }
}
