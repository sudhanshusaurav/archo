import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import SwiperCore, {Autoplay, Navigation, EffectFade} from 'swiper';
import "swiper/css/effect-fade"
import ButtonPrimary from '../button/ButtonPrimary';
import './carousel.css'

SwiperCore.use([Navigation, EffectFade]);

function Carousel({data}) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    document.querySelector('.swiper-button-prev').classList.add('el__parallax__hero', 'el__hover')
    document.querySelector('.swiper-button-next').classList.add('el__parallax__hero')
    const swiper = document.querySelector('.mySwiper')

    swiper.addEventListener('mousemove', function(e){
      this.querySelectorAll('.el__parallax__hero').forEach(el => {
        const speed = el.getAttribute('data-speed') ? el.getAttribute('data-speed') : 5
        const posX = (window.innerWidth - e.clientX * speed)/100
        const posY = (window.innerHeight - e.clientY * speed)/100

        el.style.transform = `translate(${posX}px, ${posY}px)`
      });
    })

    // swiper.addEventListener('mouseleave', function (e) {
    //   this.querySelectorAll('.el__parallax__hero').forEach(el => {
    //     el.style.transform = `translate(0px, 0px)`
    //   });
    // })
  }, [activeIndex]);
  

  const renderSlide = data.map((slide,index) => {
      return(<SwiperSlide key={slide.heading}>
        <div className='w-full h-[100vh] relative'>
          <img src={slide.img} alt={slide.heading} className='object-cover w-full h-full'/>
          <div className='absolute top-0 left-0 w-full h-full bg-secondary/50'>
            <div className='w-[80%] mx-auto h-full flex items-center justify-between'>
              <div className=''>
                <h2 className='text-4xl tracking-widest uppercase font-regular text-primary font-teko el__parallax__hero' data-speed="4">{slide.type}</h2>
                <h1 className={`my-6 text-6xl font-bold text-white capitalize el__parallax__hero`} data-speed="7">{slide.heading}</h1>
                <p className='text-white el__parallax__hero' data-speed="2">Right design and right ideas matter a lot of in interior design business. <br/> A style that makes a statement.</p>
                <ButtonPrimary label="READ MORE" id="hero-primary-btn" className="my-8 el__parallax__hero el__hover"/>
              </div>
              <div className='flex items-center gap-3 text-white mb-60 font-teko el__parallax__hero' data-speed="4">
                  <span className='mb-2 text-6xl font-black leading-none text-transparent slide__index'>{index+1}</span> <span className='text-sm'>/</span> <span className='text-4xl font-semibold leading-none'>{data.length}</span>
              </div>
            </div>
            
          </div>
        </div>
      </SwiperSlide>);
    });

    const activeSlideChange = (e) => {
      if (e.activeIndex > data.length) {
        setActiveIndex(1)
      }else if (e.activeIndex === 0) {
        setActiveIndex(data.length)
      }else{
        setActiveIndex(e.activeIndex)
      }
    }

  return( 
    <Swiper navigation={true} loop={true} effect={'fade'} autoplay={{
      delay: 3000,
      disableOnInteraction: true,
    }} 
    modules={[Autoplay, Navigation]} speed={300} onActiveIndexChange={(e) => activeSlideChange(e)} className="mySwiper">
      {renderSlide}
    </Swiper>
  );
}

export default Carousel;
