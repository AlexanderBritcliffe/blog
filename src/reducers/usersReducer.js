export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
     return state;
  }
};

//anytime we return some data from a reducer we always have
// to return a new array or object or different valued string
//  or number if we expect redux to realize we made a change
//  to data in application.  if we return exact same object
//  or array redux has simple comparison where it checks if it
// is the same and if it is redux sees nothing has changed and
// does not update the rest of application and tells react side
// of app to re render and pull down new state and show new content 
