import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});

//reducers specify how an applications state changes in
//response to actions sent to the store
//
//actions describe what happened but do not describe
// how applications state changes reducers are in charge of that
//
//in terms of code reducers are a function that take
//state and actions as arguments and return next state of application
