import { StyleSheet } from 'react-native';

import { BUTTON } from 'utils/common.style';

export default StyleSheet.flatten({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    paddingVertical: BUTTON.PADDING_VERTICAL
  }
});
