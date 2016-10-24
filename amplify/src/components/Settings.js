import React from 'react';

const Settings = () => {
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

export default Settings;
