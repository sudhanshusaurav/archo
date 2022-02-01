import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function PortfolioCard({data, id}) {
    console.log(id);
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.portfolio__image__tl${id}`,
                start: 'top center'
            }
        })
  
        tl.fromTo(`.portfolio__image__tl${id}`, {clipPath:'polygon(0 0, 100% 0, 100% 0, 0 0)'},{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration:1, stagger:.5})
    }, []);
    

  return <div className={`mt-8 image-scale-wrapper portfolio__image__tl${id}`}>

      <div className={`relative portfolio__image__wrapper overflow-hidden`}>
          <img src={data.image} alt={data.title} className={`object-cover w-full h-full image-scale`}/>
          <div className='absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black/0 portfolio__image__overlay z-[1]'></div>
      </div>
      <div className='p-3 mt-3 text-left porfolio__text__wrapper'>
          <h3 className='text-lg font-semibold uppercase'>{data.title}</h3>
          <p className='text-[13px] text-gray/60 tracking-[4px] uppercase'>{data.category}</p>
      </div>
  </div>;
}

export default PortfolioCard;
