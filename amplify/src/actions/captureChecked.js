export default function captureChecked() {

  return (dispatch, getState) => {
    const { data } = getState().captureCheckedReducer;

    // TODO: if the user checked state changed
    dispatch({
      type: 'CAPTURE_CHECKED',
      data
    });
  };
}
