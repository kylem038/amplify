const firebase = require('firebase');

export function addSettingValue(settingName, settingValue) {
  return {
    type: 'ADD_SETTING',
    settingValue,
    settingName
  };
}

export function removeSettingValue(settingName, settingValue) {
  return {
    type: 'REMOVE_SETTING',
    settingValue,
    settingName
  };
}

export function addSingleSettingValue(settingName, settingValue) {
  return {
    type: 'ADD_SINGLE_SETTING',
    settingValue,
    settingName
  };
}

export function replaceAllSettings(userData) {
  return {
    type: 'REPLACE_ALL_SETTINGS',
    userData
  };
}



export function retrieveSettings() {
  return (dispatch) => {
    const reference = firebase.database().ref(`${firebase.auth().currentUser.uid}`);
    reference.once('value').then(function(snapshot) {
    var userData = snapshot.val().settings;
    dispatch(replaceAllSettings(userData));
    });
  };
}

export function clearSettings() {
  return {
    type: 'CLEAR_SETTINGS'
  };
}
