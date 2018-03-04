import { TabNavigator } from 'react-navigation';

import HomeScreen from './Home';
import ProfileScreen from './Profile';

const AUTHENTICATED_ROUTER_TABS = {
  HOME: 'Home',
  PROFILE: 'Profile'
};

const Navigator = TabNavigator({
  [AUTHENTICATED_ROUTER_TABS.HOME]: { screen: HomeScreen },
  [AUTHENTICATED_ROUTER_TABS.PROFILE]: { screen: ProfileScreen }
});

Navigator.navigationOptions = {
  header: null
};

export default Navigator;
