import React from 'react';
import Carousel from './carousel/Carousel';
import Hero1 from '../assets/images/hero1.jpg'
import Hero2 from '../assets/images/hero2.jpg'
import Hero3 from '../assets/images/hero3.jpg'
import Hero4 from '../assets/images/hero4.jpg'

function Hero() {
  const heroContent = [
    {
      img : Hero4,
      type: 'interior',
      heading: 'design agency'
    },
    {
      img : Hero2,
      type: 'elegant &',
      heading: 'unique design'
    },
    {
      img : Hero3,
      type: 'classic',
      heading: 'and modern'
    },
    {
      img : Hero1,
      type: 'inovative',
      heading: 'architecture'
    }
  ]
  return (
  <div className=''>
      <Carousel data={heroContent}/>
  </div>
  );
}

export default Hero;
