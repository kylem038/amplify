import React from 'react';

const Settings = () => {
  return (
    <section className='Settings'>
      <h1>Settings</h1>
      <p>Instrument(s) You Play</p>
      <input type='text' placeholder='Instrument' className='SettingsInput' />
      <p>Genres You Enjoy</p>
      <input type='text' placeholder='Genre' className='SettingsInput' />
      <p>Skill Level</p>
      <input type='text' placeholder='Skill' className='SettingsInput' />
      <button className='SubmitSettings'>Submit</button>
      <button className='CancelSettings'>Cancel</button>
    </section>
  );
}

export default Settings;
