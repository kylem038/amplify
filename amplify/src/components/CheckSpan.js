import React from 'react';

const ShowHideSpan = (props, style) => {
  return (
  <span className={props.hidden ? style.hidden : style.show} children={'✔'}>
  </span>
  )
};

export default ShowHideSpan;

// normal styling 'CheckboxArea' 
