import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import blogReducer from './blog/blogReducer';

const rootReducer = combineReducers({
  users: userReducer,
  posts: blogReducer,
});

export default rootReducer;
