import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { Swiper } from "swiper/react";
import "swiper/css";
import {Autoplay} from 'swiper';


const SlidePerView = forwardRef((props, ref) => {
    
    const prevSlide = () => {
        swiper.slidePrev(500)
    }

    const nextSlide = () => {
        swiper.slideNext(500)
    }

    useImperativeHandle(ref, () => ({prevSlide, nextSlide}),[]);

    let swiper
    useEffect(() => {
        swiper = document.querySelector(`#${props.slideId}`).swiper;
    }, []);
    

  return <Swiper
  slidesPerView={props.slidesPerView}
  spaceBetween={props.spaceBetween}
  loop={true} autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }} 
  modules={[Autoplay]} speed={300}
  id={props.slideId}
>
  {props.children}
</Swiper>;
})

export default SlidePerView;
