import React, { Component } from 'react';
import firebase from '../firebase';
import SignIn from './SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
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
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
    this.getLocalCoordinates();
  }

  render() {
    const { user } = this.state;
    if (user) {
      return (
        <div className='LoggedIn' role='link'>
        <h1>JamFinder</h1>
        <button
          className='SignOut'
          alt='Sign out'
          onClick={() => firebase.auth().signOut().then(function() {
            console.log('Signed out');
          }, function(error) {
            console.log(error);
          })}
          >Sign Out</button>
        </div>
      )
    }
    return (
      <div className="App">
        <SignIn />
      </div>
    );
  }
}

export default App;
