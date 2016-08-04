// need to change

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Marked from 'marked';

import { fetchPost, updatePost, deletePost } from '../../actions/index';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
      editButton: 'edit',
    };

    // bindings...
    this.setTitle = this.setTitle.bind(this);
    this.setTags = this.setTags.bind(this);
    this.setContent = this.setContent.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.post.title,
      tags: nextProps.post.tags,
      content: nextProps.post.content,
    });
  }

  setTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  setTags(event) {
    this.setState({
      tags: event.target.value,
    });
  }

  setContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  editPost() {
    if (this.state.editButton === 'edit') {
      this.setState({
        editButton: 'done',
      });
    } else {
      this.setState({
        editButton: 'edit',
      });
    }
    this.updatePost();
  }

  updatePost() {
    this.props.updatePost({ title: this.state.title, tags: this.state.tags, content: this.state.content, id: this.props.params.id });
  }

  deletePost() {
    this.props.deletePost(this.props.params.id);
  }

  markItUp() {
    return { __html: Marked(this.state.content) };
  }

  render() {
    if (this.state.editButton === 'done') {
      return (
        <div>
          <div id="fields">
            <div>
              Title: <input value={this.state.title} onChange={this.setTitle} />
            </div>
            <div>
              Tags: <input value={this.state.tags} onChange={this.setTags} />
            </div>
            <div>
              Content: <textarea value={this.state.content} onChange={this.setContent} />
            </div>
          </div>
          <div id="buttons">
            <button className="edit" onClick={this.editPost}>
              {this.state.editButton}
            </button>
            <button className="delete" onClick={this.deletePost}>
              delete
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div id="fields">
            <div>
              {this.state.title}
            </div>
            <div>
              {this.state.tags}
            </div>
            <div dangerouslySetInnerHTML={this.markItUp()}>
            </div>
          </div>
          <div id="buttons">
            <button className="edit" onClick={this.editPost}>
              {this.state.editButton}
            </button>
            <button className="delete" onClick={this.deletePost}>
              delete
            </button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

export default connect(mapStateToProps, { fetchPost, updatePost, deletePost })(Show);
