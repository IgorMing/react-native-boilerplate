import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

const mapStateToProps = ({ auth }) => ({ ...auth });

@connect(mapStateToProps)
export default class Navigator extends Component {
  static propTypes = {
    token: PropTypes.string
  }

  static defaultProps = {
    token: null
  }

  componentDidMount() {

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
