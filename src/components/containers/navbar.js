import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signoutUser();
  }


  render() {
    console.log(this.props.authenticated);
    if (this.props.authenticated) {
      return (
        <div id="navbar">
          <Link className="link" to="/">The most awesaome blog in the world</Link>
          <Link className="link" to="/posts/new">new post +</Link>
          <button id="signout" onClick={this.signOut}>sign out</button>
        </div>
      );
    } else {
      return (
        <div id="navbar">
          <Link className="link" to="/">The most awesaome blog in the world</Link>
          <Link className="link" to="/posts/new">new post +</Link>
          <Link className="link" to="/signin">sign in</Link>
          <Link className="link" to="/signup">sign up</Link>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { signoutUser })(NavBar);
