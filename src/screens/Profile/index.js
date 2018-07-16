import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { translate } from 'react-i18next';

import { logoutAction } from 'components/Auth/duck';

import styles from './index.style';

const mapDispatchToProps = { logoutAction };

@connect(null, mapDispatchToProps)
@withNavigation
@translate(['profile'], { wait: true })
export default class Profile extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('profile:title')
  })

  static propTypes = {
    logoutAction: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
  }

  logoutHandler = () => {
    this.props.logoutAction(this.props.navigation);
  }

  render() {
    const { t } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          {t('profile:message')}
        </Text>
        <View
          style={styles.buttonContainer}
        >
          <Button
            onPress={this.logoutHandler}
            title={t('profile:actions.logout')}
          />
        </View>
      </View>
    );
  }
}
