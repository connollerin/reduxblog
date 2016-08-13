import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/index';
import { browserHistory } from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  setUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  setPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  submit() {
    this.props.signinUser({ email: this.state.username, password: this.state.password });
  }

  cancel() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div id="signIn">
        <h1>
          Sign in:
        </h1>
        <div id="fields">
          <div>
            Username: <input value={this.state.username} onChange={this.setUsername} />
            <p>Note: your username is the email associated with this account.</p>
          </div>
          <div>
            Password: <input value={this.state.password} onChange={this.setPassword} />
          </div>
        </div>
        <div id="buttons">
          <button id="submit" onClick={this.submit}>Submit</button>
          <button id="cancel" onClick={this.cancel}>Cancel</button>
        </div>
      </div>
    );
  }
  }


// // connects particular parts of redux state to this components props
// const mapStateToProps = (state) => (
//   {
//     post: state.authenticated, // not sure what is supposed to happen here
//   }
// );

// react-redux glue -- outputs Container that know state in props
export default connect(null, { signinUser })(SignIn);
