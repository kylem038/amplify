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
