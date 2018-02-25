import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutAction } from 'components/Auth/duck';

import styles from './index.style';

const mapStateToProps = ({ auth }) => ({ ...auth });
const mapDispatchToProps = { logoutAction };

@connect(mapStateToProps, mapDispatchToProps)
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  static propTypes = {
    logoutAction: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    token: PropTypes.string
  }

  static defaultProps = {
    token: null
  }

  logoutHandler = () => {
    this.props.logoutAction(this.props.navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.logoutHandler}
          title="Logout"
          accessibilityLabel="Acessibility logout button"
        />
        <Text>The token is {this.props.token}</Text>
      </View>
    );
  }
}
