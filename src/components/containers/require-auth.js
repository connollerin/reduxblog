import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// this can be dumb or smart component - connect works with either

export default function (ComposedComponent) {
  class RequireAuth extends Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/signin');
      }
    }

    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />;
        </div>
      );
    }
  }

  const mapStateToProps = (state) => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  // react-redux glue -- outputs Container that know state in props
  return connect(mapStateToProps, null)(RequireAuth); // not sure if this is correct
}
