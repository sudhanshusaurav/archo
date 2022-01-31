import React from 'react';

function SkillProgress({count, label}) {
  return <div className='flex-1 min-w-[20%] flex items-center justify-center my-12'>
  <div className='relative text-white skill'>
      <div className='flex items-center justify-center w-40 h-40 border-[6px] rounded-full outer border-black/20'>
          <div className='flex items-center justify-center rounded-full w-28 h-28 bg-primary-light/20 inner'>
              <h3 className="text-5xl font-thin tracking-wide font-teko number text-h3">{count}%</h3>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180px" height="180px">
          <circle cx="80" cy="80" r="77" strokeLinecap="square" />
      </svg>
      <h5 className='mt-6 font-normal tracking-wider uppercase'>{label}</h5>
  </div>
</div>;
}

export default SkillProgress;
