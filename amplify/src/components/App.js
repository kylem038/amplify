import React, { Component } from 'react';
import SignIn from '../containers/SignIn';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class App extends Component {

  getLocalCoordinates() {
    if (navigator.geolocation) {
      const geo_success = (position) => {
        // return set state to hold current location data
        console.log(position.coords.latitude, position.coords.longitude);
      };

      const geo_error = (error) => {
        console.log(error);
      };

      navigator.geolocation.getCurrentPosition(geo_success, geo_error);
    }
  }

  componentDidMount() {
    // this.getLocalCoordinates();   --enable in future iteration
  }

  render() {
  const { auth } = this.props;
    return (
      <div className="App">
        <h1>JamFinder</h1>
        <SignIn />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App)
