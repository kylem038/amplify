import React from 'react';
import { Link } from 'react-router';

const Settings = () => {
  return (
    <section className='Settings'>
      <h1>Settings</h1>
      <Link to='/instruments'>
      <p>Instrument(s) You Play</p>
      <input type='text' placeholder='Instrument' className='SettingsInput' />
      </Link>
      <Link to='/genres'>
      <p>Genres You Enjoy</p>
      <input type='text' placeholder='Genre' className='SettingsInput' />
      </Link>
      <Link to='/skill'>
      <p>Skill Level</p>
      <input type='text' placeholder='Skill' className='SettingsInput' />
      </Link>
      <button className='SubmitSettings'><Link to='/dashboard' className='SubmitButtonLink'>Submit</Link></button>
      <button className='CancelSettings'><Link to='/' className='CancelButtonLink'>Cancel</Link></button>
    </section>
  );
}

export default Settings;
