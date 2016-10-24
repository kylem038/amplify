import React from 'react';

export default function () {
  return (
    <section className='Settings'>
      <h1>Settings</h1>
      <p>Instrument(s) You Play</p>
      {/* drop down here? */}
      <p>Genres You Enjoy</p>
      {/* drop down here? */}
      <p>Skill Level</p>
      {/* drop down here? */}
      <button className='SubmitSettings'>Submit</button>
      <button className='CancelSettings'>Cancel</button>
    </section>
  );
}
