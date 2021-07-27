import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
}

export default connect(
  mapStateToProps,
 )(UserHeader);


 //rather than finding the appropriate user in
 //the component we want to find the appropriate user in mapStateToProps
 //we want to find the userID that is equal to this components prop of user id
 //this would only be avaliable inside that component if it wasnt for ownProps
 //ownProps is a refefrence to the props that are about to be sent into the component above
 //
 //if we want to do precalculation steps we can refrence props about to go into component from ownprops
 //and we still get redux state on first argument
