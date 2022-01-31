import React from 'react';

function PortfolioCard({data}) {
  return <div className='mt-8'>

      <div className='relative portfolio__image__wrapper'>
          <img src={data.image} alt={data.title} className='object-cover w-full h-full'/>
          <div className='absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black/0 portfolio__image__overlay z-[1]'></div>
      </div>
      <div className='p-3 mt-3 text-left porfolio__text__wrapper'>
          <h3 className='text-lg font-semibold uppercase'>{data.title}</h3>
          <p className='text-[13px] text-gray/60 tracking-[4px] uppercase'>{data.category}</p>
      </div>
  </div>;
}

export default PortfolioCard;
