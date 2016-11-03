export default function toggleChecked() {

  return (dispatch, getState) => {
    const { checked, hidden } = getState().toggleCheckedReducer;

    dispatch({
      type: 'TOGGLE_CHECKED',
      checked: !checked,
      hidden: !hidden
    });
  };
}
