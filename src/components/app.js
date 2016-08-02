import React, { Component } from 'react';
import NavBar from 'navbar';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      { NavBar }
      <div id=posts>
        {props.children}
      </div>
    );
  }
}

export default App;
