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

export function removeSingleSettingValue(settingName, settingValue) {
  return {
    type: 'REMOVE_SINGLE_SETTING',
    settingValue,
    settingName
  };
}
