import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AboutImage from '../../assets/images/about-image.jpg'

import './aboutUs.css';

gsap.registerPlugin(ScrollTrigger)

function AboutUs() {

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about__tl__init',
        start: 'top center',
      }
    })
    tl.fromTo('.about__reveal__down', {height:0},{height:'100%', duration:1});
    tl.fromTo('.about__slide__left', {x:500},{x:0, duration:.5, ease:"elastic(3,0.3)"})
    tl.fromTo('.about__fade__in', {opacity: 0}, {opacity: 1, duration:.5, stagger:.5});
  }, []);
  

    useEffect(() => {
      const about = document.querySelector('.about')
      const aboutParallax = document.querySelector('.el__parallax__about')
      const aboutParallaxFrame = document.querySelector('.el__parallax__frame')
      const aboutParallaxContainer = document.querySelector('.el__parallax__about__container')
      const aboutParallaxBg = document.querySelector('.el__parallax__about__bg')

      const x = (aboutParallaxContainer.clientWidth/2)
      const y = (aboutParallaxContainer.clientHeight/2)

      about.addEventListener('mousemove', function (e) {
        const speed = aboutParallax.getAttribute('data-speed')
        const posX = (window.innerWidth - e.clientX * speed)/100
        const posY = (window.innerWidth - e.clientY * speed)/100

        aboutParallaxFrame.setAttribute('style', `top: ${posY}px; right:${posX}px;`)
          aboutParallax.setAttribute('style', `top: ${y + posY}px; left:${x + posX}px;`)
          aboutParallaxBg.setAttribute('style', `background-position: ${18 + (posX/10)}% ${65 + (posY/10)}%;`)
      })

      about.addEventListener('mouseleave', function () {
        aboutParallaxFrame.setAttribute('style', `top: 0px; right:0px;`)
        aboutParallax.setAttribute('style', `top: ${y}px; left:${x}px;`)
      })
    }, []);
    
  return <div className='w-full py-32 overflow-x-hidden'>
      <div className='w-[85%] mx-auto about about__tl__init'>
          <div className='flex items-center justify-between'>
              <div className='basis-[35%] h-[90vh] relative el__parallax__about__container'>
                <img src={AboutImage} alt="about" className='object-cover w-full h-full about__reveal__down' />
                <div className='absolute w-[80%] h-[85%] font-teko p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 shadow-2xl el__parallax__about' data-speed='2'>
                    <span className='absolute text-2xl leading-none top-8 right-8 text-primary'><span className='tracking-wider'> SINCE</span> <br /> <span className='font-bold'>1999</span> </span>
                    <div className='absolute bottom-8 left-8'>
                        <h1 className='leading-none about__year el__parallax__about__bg'>21</h1>
                        <h5 className='text-2xl font-bold text-primary about__exp__h5'>Years Experience</h5>
                    </div>
                </div>
              </div>
              <div className='relative flex-1 pl-20'>
                <div className='flex items-center gap-4'>
                    <span className='w-20 h-[1px] bg-primary about__fade__in'></span><span className='font-semibold font-teko text-primary tracking-[5px] about__fade__in'>ABOUT US</span>
                </div>
                <h1 className='my-8 text-5xl font-normal tracking-normal font-playfair about__fade__in'>Best Designers <br /> Architectures for You.</h1>
                <p className='text-[15px] text-gray/60 leading-6 tracking-wider about__fade__in'>Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi.</p>
                <div className='flex items-center mt-12'>
                    <div className='flex-1 about__fade__in'>
                        <h2 className='mb-4 text-6xl font-teko text-primary'>352</h2>
                        <p className='text-[14px]'>PROJECTS <br />COMPLETED</p>
                    </div>
                    <div className='flex-1 about__fade__in'>
                        <h2 className='mb-4 text-6xl font-teko text-primary'>567</h2>
                        <p className='text-[14px]'>SATISFIED <br />CLIENTS</p>
                    </div>
                    <div className='flex-1 about__fade__in'>
                        <h2 className='mb-4 text-6xl font-teko text-primary'>12</h2>
                        <p className='text-[14px]'>AWARDS <br />WON</p>
                    </div>
                </div>
                <div className='absolute top-0 right-0 w-1/3 h-1/2 z-[-1] border-8 border-gray/5 el__parallax__frame about__slide__left'></div>
              </div>
          </div>
      </div>
  </div>;
}

export default AboutUs;
