const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyD-ccX7p5AidHl0RRto_paFBYI1XnQ36YU",
    authDomain: "jamfinder-84a51.firebaseapp.com",
    databaseURL: "https://jamfinder-84a51.firebaseio.com",
    storageBucket: "jamfinder-84a51.appspot.com",
    messagingSenderId: "957714418738"
  };

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.FacebookAuthProvider();
