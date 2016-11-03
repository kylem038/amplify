export default function sendChecked(data) {
  return (dispatch) => {
    dispatch({
      type: 'SEND_CHECKED',
      data
    });
  };
}
