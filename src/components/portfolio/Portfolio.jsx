import React from 'react';
import P1 from '../../assets/images/p1.jpg'
import P2 from '../../assets/images/p2.jpg'
import P3 from '../../assets/images/p3.jpg'
import P4 from '../../assets/images/p4.jpg'
import './portfolio.css';
import PortfolioCard from './PortfolioCard';

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
            image: P1,
            title: 'startup studio',
            category: 'fashion, photoshop, residential'
        },
        {
            image: P1,
            title: 'luxury vila',
            category: 'web design, residential, photshop'
        }
    ]

    const renderPortfolioCard = portfolioData.map(data => {
        return <div className='flex-1 min-w-[45%]' key={data.title}>
            <PortfolioCard data={data}/>
            </div>;
    })
  return <div className='w-full py-32'>
    <div className='p-8 text-center'>
        <h5 className='tracking-[5px] text-primary font-teko text-lg'>BEST WORKS</h5>
        <h1 className='my-8 text-5xl font-semibold leading-5 tracking-wider font-playfair'>Our Portfolio</h1>

        <div className='flex flex-wrap gap-8 mt-12'>
            {renderPortfolioCard}
        </div>
    </div>
  </div>;
}

export default Portfolio;
