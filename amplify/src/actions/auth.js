const firebase = require('firebase');
// let userUid;

var config = {
    apiKey: "AIzaSyD-ccX7p5AidHl0RRto_paFBYI1XnQ36YU",
    authDomain: "jamfinder-84a51.firebaseapp.com",
    databaseURL: "https://jamfinder-84a51.firebaseio.com",
    storageBucket: "jamfinder-84a51.appspot.com",
    messagingSenderId: "957714418738"
  };

firebase.initializeApp(config);

const provider = new firebase.auth.FacebookAuthProvider();

const startListeningToAuth = () => {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: 'LOG_IN',
          uid: user.uid,
          username: user.displayName
        });
      } else {
        if(getState().auth.status !== 'ANONYMOUS') {
          dispatch({
            type: 'LOG_OUT'
          });
        }
      }
    });
  };
};

const logIn = () => {
  return (dispatch) => {
    dispatch({
      type: 'ATTEMPTING_SIGN_IN'
    });

    firebase.auth().signInWithPopup(provider)
    .then(result => {
      // userUid = result.user.uid;

      // check if user exists in firebase
      // if true, log in user
      // if false, create user in firebase
      // const reference = firebase.database().ref(`/${userUid}/${result.user.displayName}`);
      // reference.push({
      //   username: result.user.displayName
      // });
      dispatch({
        type: 'LOG_IN',
        uid: result.user.uid,
        username: result.user.displayName
      });
    })
      .catch(error => {
        console.log(error);
    });
  };
};

const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOG_OUT'
    });

    firebase.auth().signOut()
    .then(() => {
      console.log('Signed out');
    })
    .catch(error => {
      console.log(error);
    });
  };
};

export {
  startListeningToAuth,
  logIn,
  logOut
};
