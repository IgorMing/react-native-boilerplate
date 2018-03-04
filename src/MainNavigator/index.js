import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { verifyAuthentication } from 'components/Auth/duck';

import LoginScreen from '../screens/Login';
import AuthenticatedNavigator from '../screens/AuthenticatedNavigator';

import styles from './index.style';

export const ROUTE_NAMES = {
  AUTHENTICATED_NAVIGATOR: 'AuthenticatedNavigator',
  LOGIN: 'Login'
};

const mapStateToProps = ({ auth }) => ({ ...auth });
const mapDispatchToProps = { verifyAuthentication };

@connect(mapStateToProps, mapDispatchToProps)
export default class Navigator extends Component {
  static propTypes = {
    token: PropTypes.string,
    verifyAuthentication: PropTypes.func.isRequired
  }

  static defaultProps = {
    token: null
  }

  componentDidMount() {
    this.props.verifyAuthentication();
  }

  render() {
    const initialRouteName = this.props.token ? ROUTE_NAMES.AUTHENTICATED_NAVIGATOR : ROUTE_NAMES.LOGIN;

    const MainStackNavigator = StackNavigator({
      [ROUTE_NAMES.LOGIN]: { screen: LoginScreen },
      [ROUTE_NAMES.AUTHENTICATED_NAVIGATOR]: { screen: AuthenticatedNavigator }
    }, {
      initialRouteName
    });

    return (
      <View style={styles.container}>
        <MainStackNavigator />
      </View>
    );
  }
}
