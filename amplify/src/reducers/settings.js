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
      const newState = Object.assign({}, state, {
        [action.settingName]: state[action.settingName].filter((value) => value !== action.settingValue)
      });
      return newState;
    default:
      return state;
  }
};

export default settings;
