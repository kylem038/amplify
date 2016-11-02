const initialState = {
  checked: false,
  hidden: true
};

const toggleCheckedReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case 'TOGGLE_CHECKED':
      return {
        checked: action.value,
        hidden: action.value
      };
    default:
      return state;
  }
};

export default toggleCheckedReducer;
