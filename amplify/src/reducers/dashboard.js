const initialState = {
  showEmail: false,
};

const dashboard = ( state = initialState, action ) => {
  switch(action.type) {
    case 'ADD_BANDMATE':
      return action.bandmateData;

    case 'SHOW_BANDMATE_EMAIL':
      return { showEmail: true };

    default:
      return state;
  }
};

export default dashboard;
