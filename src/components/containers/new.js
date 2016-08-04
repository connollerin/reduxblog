import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/index';
import { browserHistory } from 'react-router';

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.setTitle = this.setTitle.bind(this);
    this.setTags = this.setTags.bind(this);
    this.setContent = this.setContent.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
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

  submit() {
    this.props.createPost({ title: this.state.title, tags: this.state.tags, content: this.state.content });
  }

  cancel() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div id="newPost">
        <h1>
          Create your new blog post:
        </h1>
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
          <button id="create" onClick={this.submit}>Create</button>
          <button id="cancel" onClick={this.cancel}>Cancel</button>
        </div>
      </div>
    );
  }
  }


// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { createPost })(New);
