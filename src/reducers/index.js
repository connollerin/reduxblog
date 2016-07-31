import { combineReducers } from 'redux';

import PostsReducer from './posts-reducer';

const rootReducer = combineReducers({
  count: PostsReducer,
});

export default rootReducer;
