import React from 'react';

const Skill = () => {
  return (
    <section className='Skill'>
      <h1>Your Skill Level</h1>
      <form className='skill-form'>
        <p>Beginner</p>
        <input type="checkbox" name="beginner" value="Beginner"></input>
        <p>Experienced</p>
        <input type="checkbox" name="experienced" value="Experienced"></input>
        <p>Master</p>
        <input type="checkbox" name="master" value="Master"></input>
      </form>
      <button className='SubmitSettings'>Submit</button>
      <button className='CancelSettings'>Cancel</button>
    </section>
  );
}

export default Skill;
