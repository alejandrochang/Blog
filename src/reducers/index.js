import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
}); 


/*  Initialization example:

export default combineReducers({
  replaceMe: () => "hi there"
});
dummy reducer to make the application work

*/
