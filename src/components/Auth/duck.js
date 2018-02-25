import { NavigationActions } from 'react-navigation';

// Actions
const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';

const INITIAL_STATE = {
  token: null
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
  const token = '__MOCKED_TOKEN__';

  return {
    type: LOGIN,
    payload: {
      token
    }
  };
}

export function logoutAction(navigation) {
  return (dispatch) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })]
    });

    navigation.dispatch(resetAction);

    dispatch({
      type: LOGOUT
    });
  };
}
