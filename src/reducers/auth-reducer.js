import { ActionTypes } from '../actions';

const authReducer = (state = { authenticated: false, authorname: null }, action) => { // might want to add user later
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true, authorname: 'billy' };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
