import React, { Component } from 'react';
import { Button, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { loginAction } from 'components/Auth/duck';
import styles from './index.style';

const mapDispatchToProps = { loginAction };

@connect(null, mapDispatchToProps)
@translate(['login'], { wait: true })
export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    loginAction: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
  }

  loginHandler = () => {
    this.props.loginAction();
  }

  render() {
    const { t } = this.props;

    return (
      <View style={styles.container}>
        <View
          style={styles.buttonContainer}
        >
          <Button
            onPress={this.loginHandler}
            title={t('login:title')}
          />
        </View>
      </View>
    );
  }
}
