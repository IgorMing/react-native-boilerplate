import { Platform, StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.flatten({
  container: {
    flex: 1,
    paddingTop: Platform === 'ios' ? 0 : StatusBar.currentHeight
  }
});
