import React, { Component } from 'react';
import SignIn from '../containers/SignIn';
import SignOut from '../containers/SignOut';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class App extends Component {


  shouldComponentUpdate(nextProps) {
    return nextProps.auth.uid !== this.props.auth.uid;
  }

  render() {
    const { auth } = this.props;
    if ( auth.uid && auth.uid.length > 0 ) {
      return (
        <Redirect to="/settings" />
      );
    }
    else {
      return (
        <div className="App">
          <h1>JamFinder</h1>
          <SignIn />
        </div>
      );
    }
  }
}



const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App)
