import React from 'react';
import SkillImage from '../../assets/images/skills.jpg'
import SkillProgress from './SkillProgress';
import './skills.css'

function Skills() {
  return <div className='relative py-20 text-center'>
          <img src={SkillImage} alt="skill" className='absolute top-0 left-0 object-cover w-full h-full z-[-1]' />
          <div className=''>
            <h5 className='tracking-[5px] text-white font-teko text-lg'>BEST SKILLS</h5>
            <h1 className='my-8 text-5xl font-semibold leading-5 tracking-wider text-white font-playfair'>Best Skills</h1>
            <div className='flex'>
                <SkillProgress count={90} label="architecture"/>
                <SkillProgress count={75} label="interior design"/>
                <SkillProgress count={88} label="innovation"/>
                <SkillProgress count={83} label="contemporary ideas"/>
            </div>
        </div>
  </div>;
}

export default Skills;
