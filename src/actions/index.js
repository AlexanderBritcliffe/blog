import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'))
  userIds.forEach(id => dispatch(fetchUser(id)))

  // _.chain(getState().posts)
  // .map('userId')
  // .uniq()
  // .forEach(id => dispatch(fetchUser(id)))
  // .value()
};

//chain method passes down first argument--alternate method

//foreach iterates list of ids and for every id calls fetch user action creator
//foreach id we call fetch user pass in that id and then dispatch the results

//map statement will go through all posts and pull off just user id
//uniq will return array with just unique userIds

//await above makes sure that we wait for the api request in
//fetchPosts below to be completed before we do anything else inside of the fetchPostsAndUsers action creator

//dispatch fetch posts above invokes first
//function below which will return inner function
//redux thunk will see inner function see dispatch and invoke it
//
//when we call an action creator from inside an action creator
// we need to dispatch results of calling action creator


export const fetchPosts = () =>  async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };



  export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});
  };

  // export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
  // const _fetchUser = _.memoize(async(id, dispatch) => {
  //   const response = await jsonPlaceholder.get(`/users/ + ${id}`);
  //
  //   dispatch({ type: 'FETCH_USER', payload: response.data});
  // });
















//by the time actions get to reducer, we wont have fetched our
//data if we tried to use promise instead of async to avoid error message
//middleware deals with asynchronys action creators
//
//action creators return either and object or a function we take that something
//and pass it into dispatch function which will pass it on to middleware(thunk)
//thunk looks at the thing passed in and determines if it is a function or an
//object...if it is an object thunk does not need to deal with it and will pass it
// to reducers.....if it returns a function thunk invokes the function and passes
// dispatch and get state as arguments to that function...we can pass actions into
//  dispatch functions which take actions which go thro middlewares and eventually to reducers
//
//  through access to dispatch we can change any data that we want
//  through getstate we can read or access any data that we want
//
//  thunk allows us for dispatch to manually dispatch an action at some point in the future
