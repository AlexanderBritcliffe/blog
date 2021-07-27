import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk));



ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

//we imported redux thunk then called applymiddleware which is
// a function from redux library we pass the result into second
// argument of createStore call.
//
// when we apply the middleward of redux thunk anytime we
// dispatch an action the action will be
// first sent to redux thunk as middleware
// and after redux thunk action will be sent off to different reducers
//
// when we wired up redux thunk it changed the rules of our action creators
// inside of action creators file we do not need to only create action creators
// that only return action object...thunk allows us to also return a function if
//  we return a function it would be automatically called with dispatch and get
//   state arguments which gave us control over changing or getting information
//   out of our redux store
//
//   anytime we make an api request from an action creator
//    we will always use something like redux thunk
//
//    when we return a function from action creator we have a function that returns a function

//this is hooking up middleware to redux store
