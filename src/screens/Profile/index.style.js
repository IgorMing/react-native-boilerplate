import { StyleSheet } from 'react-native';

import { BUTTON_SIZE } from 'utils/common.style';

export default StyleSheet.flatten({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: BUTTON_SIZE
  }
});
