import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { verifyAuthentication } from 'components/Auth/duck';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

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
    const initialRouteName = this.props.token ? 'Home' : 'Login';

    const MainStackNavigator = StackNavigator({
      Login: { screen: LoginScreen },
      Home: { screen: HomeScreen }
    }, {
      initialRouteName
    });

    return <MainStackNavigator />;
  }
}
