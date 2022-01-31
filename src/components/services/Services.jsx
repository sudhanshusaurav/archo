import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';

function Services() {
  return <div className='w-full py-32 bg-primary-light'>
      <div className='w-[85%] mx-auto text-center'>
        <h5 className='tracking-[5px] text-primary font-teko text-lg'>BEST FEATURES</h5>
        <h1 className='my-8 text-5xl font-semibold leading-5 tracking-wider font-playfair'>Our Services</h1>
        <div className='flex items-center mt-24 text-left service__card__wrapper'>
            <div className='flex items-center justify-center flex-1 bg-white border-r-[.5px] border-gray/20 service__card'>
                <div className='p-8'>
                <h2 className='mt-8 text-6xl font-teko text-primary service__card__index'>01</h2>
                    <h4 className='my-4 text-lg font-semibold transition-all duration-300'>Architecture</h4>
                    <p className='my-4 text-[15px] tracking-wider text-gray/60'>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>                    
                    <Link to='' className="my-6 border-none el__hover btn btn-secondary-dark">Read More</Link>
                </div>
            </div>
            <div className='flex items-center justify-center flex-1 bg-white border-l-[.5px] border-r-[.5px] border-gray/20 service__card'>
                <div className='p-8'>
                <h2 className='mt-8 text-6xl font-teko text-primary service__card__index'>02</h2>
                    <h4 className='my-4 text-lg font-semibold transition-all duration-300'>Interior Design</h4>
                    <p className='my-4 text-[15px] tracking-wider text-gray/60'>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>                    
                    <Link to='' className="my-6 border-none el__hover btn btn-secondary-dark">Read More</Link>
                </div>
            </div>
            <div className='flex items-center justify-center flex-1 bg-white border-l-[.5px] border-r-[.5px] border-gray/20 service__card'>
                <div className='p-8'>
                <h2 className='mt-8 text-6xl font-teko text-primary service__card__index'>03</h2>
                    <h4 className='my-4 text-lg font-semibold transition-all duration-300'>3D Modeling</h4>
                    <p className='my-4 text-[15px] tracking-wider text-gray/60'>Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.</p>                    
                    <Link to='' className="my-6 border-none el__hover btn btn-secondary-dark">Read More</Link>
                </div>
            </div>
            <div className='flex items-center justify-center flex-1 bg-white border-l-[.5px] border-gray/20 service__card'>
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
