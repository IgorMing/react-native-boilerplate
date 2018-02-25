import { StackNavigator } from 'react-navigation';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

export default StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
});
