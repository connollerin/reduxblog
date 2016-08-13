import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/index';
import { browserHistory } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  setUsername(event) {
    this.setState({
      email: event.target.value,
    });
  }

  setPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  submit() {
    this.props.signupUser({ email: this.state.email, password: this.state.password });
  }

  cancel() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div id="signUp">
        <h1>
          Sign up:
        </h1>
        <div id="fields">
          <div>
            Email: <input value={this.state.email} onChange={this.setUsername} />
            <p>Note: this will be used as your username when signing in.</p>
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
export default connect(null, { signupUser })(SignUp);
