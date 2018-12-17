import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
  posts: postsReducer
}); 


// export default combineReducers({
//   replaceMe: () => "hi there"
// }); 
// dummy reducer to make the application work