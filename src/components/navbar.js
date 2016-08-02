import React, { Component } from 'react';
import Link from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      <div>
        <Link to="/">Erins Site Name</Link>
        <Link to="posts/new">new post</Link>
      </div>
    );
  }
}

export default NavBar;
