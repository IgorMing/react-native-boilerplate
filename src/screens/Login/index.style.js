import { StyleSheet } from 'react-native';

import { BUTTON } from 'utils/common.style';

export default StyleSheet.flatten({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: BUTTON.SIZE
  }
});
