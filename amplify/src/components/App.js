import React, { Component } from 'react';
import firebase from '../firebase';
import SignIn from './SignIn';
import Settings from './Settings';
import BandMates from './BandMates';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
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
          <Settings />
          <BandMates />
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
