import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  render() {
    return (
      <div id="navbar">
        <Link className="link" to="/">The most awesaome blog in the world</Link>
        <Link className="link" to="/posts/new">new post +</Link>
      </div>
    );
  }
}

export default NavBar;
