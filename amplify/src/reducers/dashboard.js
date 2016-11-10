const initialState = {
  showEmail: false,
};

const dashboard = ( state = initialState, action ) => {
  switch(action.type) {
    case 'ADD_BANDMATE':
      return action.bandmateData;

    default:
      return state;
  }
};

export default dashboard;
