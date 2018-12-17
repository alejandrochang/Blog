import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
  posts: () => postReducer
}); 


// export default combineReducers({
//   replaceMe: () => "hi there"
// }); 
// dummy reducer to make the application work