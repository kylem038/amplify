import React from 'react';

const ShowHideSpan = (props) => {
  return (
  <span className={props.checked ? 'CheckboxArea show' : 'CheckboxArea hidden'} children={'✔'}>
  </span>
  )
};

export default ShowHideSpan;
