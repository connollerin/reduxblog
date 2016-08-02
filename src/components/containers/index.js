import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import Link from 'react-router';

// this can be dumb or smart component - connect works with either

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // all: props.all,
      // post: props.post,
    };
  }


  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.all.map((post) => {
      const postAddress1 = 'posts/';
      const postAddress = postAddress1.concat(post.id);
      return (
        <div id="postTitle">
          <Link to={postAddress}>{post.title}</Link>
          <p>{post.tags}</p>
        </div>
      );
    });
    return (
      <div>
        {posts}
      </div>
    );
  }
}

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    all: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { fetchPosts })(Index); // not sure if this is correct
