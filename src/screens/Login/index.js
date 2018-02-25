import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './index.style';
import { loginAction } from './duck';

const mapStateToProps = ({ auth }) => ({ ...auth });
const mapDispatchToProps = { loginAction };

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    loginAction: PropTypes.func.isRequired
  }

  loginHandler = () => {
    this.props.loginAction();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.loginHandler}
          title="Login"
          accessibilityLabel="Acessibility login button"
        />
        <Text>The token is {this.props.token}</Text>
      </View>
    );
  }
}
