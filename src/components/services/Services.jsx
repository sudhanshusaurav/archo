import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './services.css';

gsap.registerPlugin(ScrollTrigger)

function Services() {

    useEffect(() => {
      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: '.service__tl__init',
              start: 'top 70%'
          }
      })

      tl.fromTo('.service__slide__bottom', {y: -150, opacity: 0}, {y:0, opacity: 1, duration: 1, stagger: .5})
      tl.fromTo('.service__reveal__down', {clipPath:'polygon(0 0, 100% 0, 100% 0, 0 0)'},{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration:.5, stagger:.5})
      tl.from('.service__bg__reveal', {background:'none', duration: 1})
    }, []);
    

  return <div className='w-full py-32 bg-primary-light'>
      <div className='w-[85%] mx-auto text-center service__tl__init'>
        <h5 className='tracking-[5px] text-primary font-teko text-lg service__slide__bottom'>BEST FEATURES</h5>
        <h1 className='my-4 text-5xl font-semibold leading-5 tracking-wider lg:my-8 font-playfair service__slide__bottom'>Our Services</h1>
        <div className='flex flex-col flex-wrap items-center mt-12 text-left md:flex-row lg:mt-24 service__card__wrapper service__bg__reveal'>
            <div className='flex items-center justify-center md:basis-[50%] lg:basis-[25%] flex-1 bg-white service__reveal__down lg:border-r-[.5px] border-gray/20 service__card'>
                <div className='p-8'>
                <h2 className='mt-8 text-6xl font-teko text-primary service__card__index'>01</h2>
                    <h4 className='my-4 text-lg font-semibold transition-all duration-300'>Architecture</h4>
                    <p className='my-4 text-[15px] tracking-wider text-gray/60'>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>                    
                    <Link to='' className="my-6 border-none el__hover btn btn-secondary-dark">Read More</Link>
                </div>
            </div>
            <div className='flex items-center justify-center md:basis-[50%] lg:basis-[25%] flex-1 bg-white service__reveal__down lg:border-l-[.5px] lg:border-r-[.5px] border-gray/20 service__card'>
                <div className='p-8'>
                <h2 className='mt-8 text-6xl font-teko text-primary service__card__index'>02</h2>
                    <h4 className='my-4 text-lg font-semibold transition-all duration-300'>Interior Design</h4>
                    <p className='my-4 text-[15px] tracking-wider text-gray/60'>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>                    
                    <Link to='' className="my-6 border-none el__hover btn btn-secondary-dark">Read More</Link>
                </div>
            </div>
            <div className='flex items-center justify-center md:basis-[50%] lg:basis-[25%] flex-1 bg-white service__reveal__down lg:border-l-[.5px] lg:border-r-[.5px] border-gray/20 service__card'>
                <div className='p-8'>
                <h2 className='mt-8 text-6xl font-teko text-primary service__card__index'>03</h2>
                    <h4 className='my-4 text-lg font-semibold transition-all duration-300'>3D Modeling</h4>
                    <p className='my-4 text-[15px] tracking-wider text-gray/60'>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>                    
                    <Link to='' className="my-6 border-none el__hover btn btn-secondary-dark">Read More</Link>
                </div>
            </div>
            <div className='flex items-center justify-center md:basis-[50%] lg:basis-[25%] flex-1 bg-white service__reveal__down lg:border-l-[.5px] border-gray/20 service__card'>
                <div className='p-8'>
                    <h2 className='mt-8 text-6xl font-teko text-primary service__card__index'>04</h2>
                    <h4 className='my-4 text-lg font-semibold transition-all duration-300'>Furniture Design</h4>
                    <p className='my-4 text-[15px] tracking-wider text-gray/60'>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>                    
                    <Link to='' className="my-6 border-none el__hover btn btn-secondary-dark">Read More</Link>
                </div>
            </div>
        </div>
      </div>
  </div>;
}

export default Services;
