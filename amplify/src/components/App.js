import React, { Component } from 'react';
import SignIn from '../containers/SignIn';
import SignOut from '../containers/SignOut';
import { connect } from 'react-redux';

class App extends Component {


  render() {
    const { auth } = this.props;

    if ( auth.status === 'ANONYMOUS' ) {
      return (
        <div className="App">
          <h1>JamFinder</h1>
          <SignIn />
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>JamFinder</h1>
          <SignOut />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App)
