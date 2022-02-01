import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import P1 from '../../assets/images/p1.jpg'
import P2 from '../../assets/images/p2.jpg'
import P3 from '../../assets/images/p3.jpg'
import P4 from '../../assets/images/p4.jpg'
import './portfolio.css';
import PortfolioCard from './PortfolioCard';

gsap.registerPlugin(ScrollTrigger)

function Portfolio() {
    const portfolioData = [
        {
            image: P1,
            title: 'digital products',
            category: 'web design, residential'
        },
        {
            image: P2,
            title: 'fantastic interior',
            category: 'web design, fashion, wordpress'
        },
        {
            image: P3,
            title: 'startup studio',
            category: 'fashion, photoshop, residential'
        },
        {
            image: P4,
            title: 'luxury vila',
            category: 'web design, residential, photshop'
        }
    ]

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.portfolio__tl__init',
                start: 'top 70%'
            }
        })
  
        tl.fromTo('.portfolio__slide__bottom', {y: -150, opacity: 0}, {y:0, opacity: 1, duration: 1, stagger: .5})
    }, []);
    

    const renderPortfolioCard = portfolioData.map((data, index) => {
        return <div className={`flex-1 min-w-[45%] portfolio__image__tl`} key={data.title}>
            <PortfolioCard data={data} id={index}/>
            </div>;
    })
  return <div className='w-full py-32'>
    <div className='p-8 text-center portfolio__tl__init'>
        <h5 className='tracking-[5px] text-primary font-teko text-lg portfolio__slide__bottom'>BEST WORKS</h5>
        <h1 className='my-8 text-5xl font-semibold leading-5 tracking-wider font-playfair portfolio__slide__bottom'>Our Portfolio</h1>

        <div className='flex flex-wrap gap-8 mt-12'>
            {renderPortfolioCard}
        </div>
    </div>
  </div>;
}

export default Portfolio;
