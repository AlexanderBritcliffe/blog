import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
             <h2>{post.title}</h2>
             <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
}

//mapStateToProps is going to be called with entire state object from redux store
//the above state has a property called posts since we assigned
// reducer to post key in our combinereducers as can be seen in reducers index.js
//
// every singletime our reducers run mapstatetoprops
//  will be called again and return new object property
//  posts and that object will show up as props object inside component

export default connect(
mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);

//the instant our component renders
//on screen we will call action creator it will return fetch posts
//
//anytime we want data from redux side of the application into
//react side we define mapstateto props function and pass it to connect
