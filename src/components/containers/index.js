import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import PostBar from '../postBar';

// this can be dumb or smart component - connect works with either

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    let posts = this.props.all.map((post) => {
      return (
        <PostBar title={post.title} id={post.id} tags={post.tags} key={post.id} /> // warning!!
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
