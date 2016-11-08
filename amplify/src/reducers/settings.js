const initialState = {
    instruments: [],
    genres: [],
    skillLevel: ''
};

const settings = ( state = initialState, action ) => {
  switch(action.type) {
    case 'ADD_SETTING':
      return Object.assign({}, state, {
        [action.settingName]: state[action.settingName].concat(action.settingValue)
      });

    case 'REMOVE_SETTING':
      return Object.assign({}, state, {
        [action.settingName]: state[action.settingName].filter((value) => value !== action.settingValue)
      });

    case 'ADD_SINGLE_SETTING':
      return Object.assign({}, state, {
        [action.settingName]: action.settingValue
      });

    case 'CLEAR_SETTINGS':
      return initialState;

    case 'REPLACE_ALL_SETTINGS':
      return action.userData;

    default:
      return state;
  }
};

export default settings;
