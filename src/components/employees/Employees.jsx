import React, { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from "swiper/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SlidePerView from '../carousel/SlidePerView';
import John from '../../assets/images/john.jpg'
import Jane from '../../assets/images/jane.jpg'
import Alison from '../../assets/images/alison.jpg'
import Peter from '../../assets/images/peter.jpg' 
import Mao from '../../assets/images/mao.jpg'
import Matt from '../../assets/images/matt.jpg'
import {FaLongArrowAltLeft, FaLongArrowAltRight, FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'
import './employees.css'

gsap.registerPlugin(ScrollTrigger)

function Employees() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)

      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: '.employee__tl__init',
              start: 'top center'
          }
      })

      tl.fromTo('.employee__slide__left',{x:'100%'}, {x:0, duration:.5, stagger:.5})
      tl.fromTo('.employee__slide__right',{x:'-100%', opacity:0}, {x:0, opacity:1, duration:.5, stagger:.5})

      return () => {
          window.removeEventListener('resize', handleWindowResize)
      }
    }, []);
    

    const employeeData = [
        {
            name: 'mitchel john',
            role: 'project manager',
            image: John
        },
        {
            name: 'jane smith',
            role: 'designer',
            image: Jane
        },
        {
            name: 'peter jefferson',
            role: 'customer',
            image: Peter
        },
        {
            name: 'alison clutcher',
            role: 'ceo',
            image: Alison
        },
        {
            name: 'Matt huk',
            role: 'founder',
            image: Matt
        },
        {
            name: 'legender mao',
            role: 'sales manager',
            image: Mao
        }
    ]

    const slideRef = useRef()

    const prevSlide = () => {
        slideRef.current.prevSlide()
    }

    const nextSlide = () => {
        slideRef.current.nextSlide()
    }

    const renderSlide = employeeData.map(slide => {
        return <SwiperSlide key={slide.name}>
            <div>
                <div className='relative employee__card'>
                    <img src={slide.image} alt={slide.name} className='object-cover w-full'/>
                    <div className='absolute top-0 left-0 flex flex-col items-center py-2 transition-all duration-300 bg-white text-primary employee__contact'>
                        <span className='p-2 el__hover'><FaFacebookF/></span>
                        <span className='p-2 el__hover'><FaTwitter/></span>
                        <span className='p-2 el__hover'><FaInstagram/></span>
                    </div>
                </div>
                <div className='my-2'>
                    <h3 className='font-semibold capitalize'>{slide.name}</h3>
                    <p className='text-sm capitalize text-gray/60'>{slide.role}</p>
                </div>
            </div>
        </SwiperSlide>
    })

  return <div className='relative py-32 overflow-hidden employee__tl__init'>
      <div className='flex flex-col items-center lg:flex-row'>
        <div className='lg:basis-[40%] lg:pl-20 lg:pr-8 text-center lg:text-left'>
            <h5 className='text-xl tracking-wide text-primary font-teko employee__slide__right'>Some thoughts from us</h5>
            <h1 className='my-4 text-4xl font-bold lg:my-8 leading lg:leading-3 employee__slide__right'>Our Employees</h1>
            <p className='mx-auto leading-7 md:w-1/2 lg:w-full text-gray/60 employee__slide__right'>We feel proud for our expert team members beatae ipsum dolor sit amet, consectetur adipisicing elit mauris vitae consequat nibh, vitae interdum mi.</p>
            <div className='hidden my-6 employee__slide__right lg:block'>
                <div onClick={prevSlide} className='inline-block p-5 mx-1 transition-all duration-300 bg-white-smoke hover:bg-primary/70 hover:border-none hover:text-white el__hover'><FaLongArrowAltLeft/></div>
                <div onClick={nextSlide} className='inline-block p-5 mx-1 bg-white-smoke hover:bg-primary/70 hover:border-none hover:text-white el__hover'><FaLongArrowAltRight/></div>
            </div>
        </div>
        <div className='hidden overflow-x-hidden lg:flex-1 employee__slide__left lg:block'>
            <SlidePerView ref={slideRef} slidesPerView={windowWidth < 992 ? 3 : 2.5} spaceBetween={40} slideId='employee-slide'>
                {renderSlide}
            </SlidePerView>
        </div>
      </div>
      <div className='absolute right-0 top-0 w-1/3 h-full bg-primary-light z-[-1] employee__slide__left'></div>
  </div>;
}

export default Employees;
