import React, { useEffect, useRef } from 'react';
import { SwiperSlide } from "swiper/react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SlidePerView from '../carousel/SlidePerView';
import './testimonials.css'
import John from '../../assets/images/john.jpg'
import Jane from '../../assets/images/jane.jpg'
import Alison from '../../assets/images/alison.jpg'
import Peter from '../../assets/images/peter.jpg' 
import Quote from '../../assets/images/quote.png'
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

function Testimonials() {
    const testimonialData = [
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
        }
    ]

    useEffect(() => {
      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: '.testimonial__tl__init',
              start: 'top center'
          }
      })

      tl.fromTo('.testimonial__slide__bottom', {y: -150, opacity: 0}, {y:0, opacity: 1, duration: 1, stagger: .5})
      tl.fromTo('.testimonial__slide__left', {x: '100%', opacity:0}, {x:0, opacity:1, duration:1})
    }, []);
    

    const slideRef = useRef(null);

    const prevSlide = () => {
        slideRef.current.prevSlide()
    }

    const nextSlide = () => {
        slideRef.current.nextSlide()
    }

    const renderSlide = testimonialData.map(slide => {
        return <SwiperSlide key={slide.name}>
        <div className='pt-12 text-left'>
            <div className='relative px-8 py-12 border-8 border-white-smoke testimonial__comment'>
                <p className='text-[18px] tracking-wider leading-8'><i>" <br /> I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Archo, the sky is the limit. <br />"</i></p>
                <div className='absolute bg-white px-6 -top-6 right-8 z-[2]'>
                    <img src={Quote} alt="quote" className='w-10 h-10'/>
                </div>
            </div>
            <div className='flex items-center gap-4 px-8 my-8'>
                <div>
                    <img src={slide.image} alt={slide.name} className='object-cover w-20 h-20 rounded-full'/>
                </div>
                <div>
                    <h5 className='text-lg font-semibold capitalize'>{slide.name}</h5>
                    <p className='text-sm capitalize text-primary'>{slide.role}</p>
                </div>
            </div>
        </div>
    </SwiperSlide>;
    })

  return <div className='py-32 testimonial__tl__init'>
      <div className='w-[85%] mx-auto text-center'>
        <h5 className='tracking-[5px] text-primary font-teko text-lg testimonial__slide__bottom'>TESTIMONIALS</h5>
        <h1 className='my-8 text-5xl font-semibold leading-5 tracking-wider font-playfair testimonial__slide__bottom'>What People Says?</h1>
        <div className='relative testimonial__slide__left'>
            <SlidePerView ref={slideRef} slidesPerView={2} spaceBetween={50} slideId='testimonial-slide'>
                {renderSlide}
            </SlidePerView>
            <div onClick={prevSlide} className='absolute z-10 p-3 transition-all duration-300 -translate-y-1/2 border -left-6 border-primary top-1/2 text-primary hover:bg-primary/70 hover:border-none hover:text-white el__hover'><FaLongArrowAltLeft/></div>
            <div onClick={nextSlide} className='absolute z-10 p-3 -translate-y-1/2 border -right-6 border-primary top-1/2 text-primary hover:bg-primary/70 hover:border-none hover:text-white el__hover'><FaLongArrowAltRight/></div>
        </div>
      </div>
      
  </div>;
}

export default Testimonials;
