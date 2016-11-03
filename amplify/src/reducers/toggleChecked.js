const initialState = {
  checked: false,
  hidden: true
};

const toggleCheckedReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case 'TOGGLE_CHECKED':
      return {
        checked: action.checked,
        hidden: action.hidden
      };
    default:
      return state;
  }
};

export default toggleCheckedReducer;
