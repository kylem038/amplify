const initialState = {
  data: []
};

const sendCheckedReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case 'SEND_CHECKED':
      return {
        data: action.value
      };
    default:
      return state;
  }
};

export default sendCheckedReducer;
