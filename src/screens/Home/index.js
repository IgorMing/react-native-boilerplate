import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import styles from './index.style';

const mapStateToProps = ({ auth }) => ({ ...auth });

@connect(mapStateToProps)
@translate(['home', 'common'], { wait: true })
export default class HomeScreen extends Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('home:title')
  })

  static propTypes = {
    i18n: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
    token: PropTypes.string
  }

  static defaultProps = {
    token: null
  }

  render() {
    const { t, i18n, token } = this.props;
    return (
      <View style={styles.container}>
        <Text>{t('home:tokenInfo', { token })}</Text>
        <Text>{t('common:languageMessage', { language: i18n.language })}</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => i18n.changeLanguage('en')}
            title={t('home:actions.toggleToEnglish')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => i18n.changeLanguage('pt')}
            title={t('home:actions.toggleToPortuguese')}
          />
        </View>
      </View>
    );
  }
}
