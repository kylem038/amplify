import React from 'react';

const Skill = () => {
  return (
    <section className='Skill'>
      <h1>Your Skill Level</h1>
      <form className='skill-form'>
      <div className='SkillBar'>
        <span className='SkillName'>
          <p>Beginner</p>
        </span>
        <span className='CheckboxArea' children={'✔'}>
        </span>
      </div>
      <div className='SkillBar'>
        <span className='SkillName'>
          <p>Experienced</p>
        </span>
        <span className='CheckboxArea' children={'✔'}>
        </span>
      </div>
      <div className='SkillBar'>
        <span className='SkillName'>
          <p>Master</p>
        </span>
        <span className='CheckboxArea' children={'✔'}>
        </span>
      </div>
      </form>
      <button className='SubmitSettings'>Submit</button>
      <button className='CancelSettings'>Cancel</button>
    </section>
  );
}

export default Skill;
