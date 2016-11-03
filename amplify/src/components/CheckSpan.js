import React from 'react';

const ShowHideSpan = (props) => {
  return (
  <span className={props.hidden ? 'hidden' : 'show'} children={'✔'}>
  </span>
  )
};

export default ShowHideSpan;

// normal styling 'CheckboxArea'
