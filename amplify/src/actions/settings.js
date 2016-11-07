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

export function saveSettings() {
  return (dispatch, getState) => {
    const userSettings = {
      username: getState().auth.username,
      settings: getState().settings
    };
    const reference = firebase.database().ref(`${firebase.auth().currentUser.uid}`);
    reference.set(userSettings);
  };
}
