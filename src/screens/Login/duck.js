// Actions
const LOGIN = 'AUTH/LOGIN';

const INITIAL_STATE = {
  token: null
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
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
