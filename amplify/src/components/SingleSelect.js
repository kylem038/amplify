import React from 'react';

const SingleSelect = () => {
  return (
    <section className='Skill'>
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
    </section>
  );
}

export default SingleSelect;
