import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

// Actions
const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';

const INITIAL_STATE = {
  token: null
};

const ASYNC_STORAGE_CONSTANTS = {
  TOKEN: '@Auth:token'
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token
      };
    case LOGOUT:
      return {
        ...state,
        token: null
      };
    default: return state;
  }
}

// Action Creators
export function loginAction() {
  return async (dispatch) => {
    try {
      const token = '__MOCKED_TOKEN__';

      await AsyncStorage.setItem(ASYNC_STORAGE_CONSTANTS.TOKEN, token);

      dispatch({
        type: LOGIN,
        payload: {
          token
        }
      });
    } catch (error) {
      console.error(`Error saving data on async storage. Message: ${error}`);
    }
  };
}

export function logoutAction(navigation) {
  return async (dispatch) => {
    try {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })]
      });

      navigation.dispatch(resetAction);

      await AsyncStorage.removeItem(ASYNC_STORAGE_CONSTANTS.TOKEN);

      dispatch({
        type: LOGOUT
      });
    } catch (error) {
      console.error(`Error removing data from async storage. Message: ${error}`);
    }
  };
}

export function verifyAuthentication() {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem(ASYNC_STORAGE_CONSTANTS.TOKEN);

      if (token) {
        dispatch({
          type: LOGIN,
          payload: {
            token
          }
        });
      }
    } catch (error) {
      console.error(`Error getting data from async storage. Message: ${error}`);
    }
  };
}
