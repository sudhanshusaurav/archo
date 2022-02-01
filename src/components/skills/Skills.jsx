import React, { useEffect } from 'react';
import SkillImage from '../../assets/images/skills.jpg'
import SkillProgress from './SkillProgress';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './skills.css'

gsap.registerPlugin(ScrollTrigger)

function Skills() {

  useEffect(() => {
    
    let tl = gsap.timeline()
    tl.to('.skill__scroll__parallax', {top:-100},"<")

    ScrollTrigger.create({
      animation: tl,
      trigger: '.skill__scroll__parallax',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    })
  }, []);
  

  return <div className='relative py-20 text-center skill__tl__init'>
          <img src={SkillImage} alt="skill" className='absolute top-60 left-0 object-cover w-full h-full z-[-1] skill__scroll__parallax'/>
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
