import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './index.style';

const mapStateToProps = ({ auth }) => ({ ...auth });

@connect(mapStateToProps)
export default class HomeScreen extends Component {
  static propTypes = {
    token: PropTypes.string
  }

  static defaultProps = {
    token: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>The token is {this.props.token}</Text>
      </View>
    );
  }
}
