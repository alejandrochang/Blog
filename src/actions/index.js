import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = () => async dispatch => {
  const response = await jsonPlaceholder.get('/users/1');
  
  dispatch({ type: 'FETCH_USER', payload: response })
}

/* Regular function (less condensed)

export const fetchPosts = () => {
  return async function (dispatch) {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response })
  }
};

*/
