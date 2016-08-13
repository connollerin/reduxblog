import { ActionTypes } from '../actions';

const authReducer = (state = { authenticated: false }, action) => { // might want to add user later
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true };
    case ActionTypes.DEAUTH_USER:
      return { authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
