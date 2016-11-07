import React from 'react';
import MultipleSelect from './MultipleSelect';
import SingleSelect from './SingleSelect';

const Settings = () => {
  return (
    <section className='Settings'>
      <h1>Settings</h1>
      <MultipleSelect settingName="instruments" values={['Guitar', 'Bass', 'Vocals', 'Drums']}/>
      <MultipleSelect settingName='genres' values={['Rock', 'Jazz', 'Indie', 'Hip-Hop']}/>
      <p>Skill Level</p>
      <SingleSelect settingName='skillLevel' values={['Beginner', 'Experienced', 'Master']}/>
      <button className='SubmitSettings'>Submit</button>
      <button className='CancelSettings'>Cancel</button>
    </section>
  );
}

export default Settings;
