export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
      default:
        return state;
  }
};

//in simplest terms (previousstate, action) => newState


//when the application first boots up above function will return an empty array


//if the appropriaite action type is not found return previous state

//post reducer is supposed to maintaina list of posts fetched from json apply
//
//since this reducer deals with array default state argument
//to be array when first called will be empty array
//
//
//action creator above fetches our post dispatches
//action fetch post and response on payload property...
//reducer will watch for actions with type fetch posts
//when it sees that it will pull or response and all data
//inside and add into an array
//
////the only thing that you will ever return
///is some computation done on the 2 arguments
///
///
///so anytime we make a request to api we will get
///back an action with payload property showing inside
///reducer reducer should return lists of posts redux
/// state object will now contain blog posts from api
/// when that happens application should re render
///
///
///
///
///
///
///
/// the first argument is state and that is
/// whatever is returned from this reducer the last time that it ran
///
///
