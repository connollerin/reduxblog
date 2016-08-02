import { ActionTypes } from '../actions';

const postsReducer = (state = { all: [], post: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...state, all: action.payload.all }; // might be action.payload
    default:
      return state;
  }
};

export default postsReducer;
