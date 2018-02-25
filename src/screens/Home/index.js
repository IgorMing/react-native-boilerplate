import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import styles from './index.style';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  logoutHandler = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })]
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.logoutHandler}
          title="Logout"
          accessibilityLabel="Acessibility logout button"
        />
        <Text>You are logged in</Text>
      </View>
    );
  }
}
