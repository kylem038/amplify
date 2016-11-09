const firebase = require('firebase');

export function addBandmates(bandmateData) {
  return {
    type: 'ADD_BANDMATE',
    bandmateData
  };
}

export function showBandmateEmail() {
  return {
    type: 'SHOW_BANDMATE_EMAIL',
  };
}

export function retrieveBandmates() {
  return (dispatch) => {
    const reference = firebase.database().ref();
    reference.once('value').then(function(snapshot) {
    var bandmateData = snapshot.val();
    dispatch(addBandmates(bandmateData));
  })
  .catch(err => console.log(err));
  };
}
