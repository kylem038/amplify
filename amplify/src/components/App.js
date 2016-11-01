import React, { Component } from 'react';
import SignIn from '../containers/SignIn';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: {},
    };
  }

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
    this.getLocalCoordinates();
  }

  render() {
    return (
      <div className="App">
        <h1>JamFinder</h1>
        <SignIn />
      </div>
    );
  }
}

export default App;
