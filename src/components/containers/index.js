import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

// this can be dumb or smart component - connect works with either


const Index = (props) => {
  const posts = this.props.all.map((post) => {
    return <Post title={post.title} id={post.id} tags={post.tags} key={post.id} />;
  });
  return (
    <div>
      {posts}
    </div>
  );
};

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { fetchPosts })(Index); // not sure if this is correct
