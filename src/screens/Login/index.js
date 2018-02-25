import React from 'react';
import { Button, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './index.style';

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Login"
      accessibilityLabel="Acessibility login button"
    />
  </View>
);

LoginScreen.navigationOptions = {
  header: null
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default LoginScreen;
