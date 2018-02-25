import React, { Component } from 'react';
import { Button, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginAction } from 'components/Auth/duck';
import styles from './index.style';

const mapDispatchToProps = { loginAction };

@connect(null, mapDispatchToProps)
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
      </View>
    );
  }
}
