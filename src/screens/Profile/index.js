import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { logoutAction } from 'components/Auth/duck';

import styles from './index.style';

const mapDispatchToProps = { logoutAction };

@connect(null, mapDispatchToProps)
@withNavigation
export default class Profile extends Component {
  static propTypes = {
    logoutAction: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  }

  logoutHandler = () => {
    this.props.logoutAction(this.props.navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.buttonContainer}
        >
          <Button
            onPress={this.logoutHandler}
            title="Logout"
            accessibilityLabel="Acessibility logout button"
          />
        </View>
      </View>
    );
  }
}
