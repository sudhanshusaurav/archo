import React, { useEffect } from 'react';
import gsap,{Power1} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function SkillProgress({count, label}) {

    const startCounting = () => {
        let number = document.getElementById(`number${count}`)
        let counting = 0
        setInterval(() => {
            if (counting === count) {
                clearInterval()
            }else{
                counting +=1
                number.innerHTML = counting + '%'
            }
        }, 1000/count);
    }

    useEffect(() => {
      let tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.skill__progress__fade__in',
            start: 'top 70%',
          }
      })

      tl.fromTo('.skill__progress__fade__in', {opacity: 0}, {opacity:1, duration:1, onComplete: startCounting})
      tl.fromTo(`#circle${count}`,{strokeDashoffset:472},{strokeDashoffset:472-(472*(count/100)), duration:1, ease: Power1.easeInOut})

    }, []);
    

  return <div className='flex-1 md:min-w-[40%] lg:min-w-[20%] flex items-center justify-center my-12'>
  <div className='relative text-white skill skill__progress__fade__in'>
      <div className='flex items-center justify-center w-40 h-40 border-[6px] rounded-full outer border-black/20'>
          <div className='flex items-center justify-center rounded-full w-28 h-28 bg-primary-light/20 inner'>
              <h3 className="text-5xl font-thin tracking-wide font-teko number text-h3" id={`number${count}`}>0%</h3>
          </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="180px" height="180px">
          <circle id={`circle${count}`} cx="80" cy="80" r="77" strokeLinecap="square" />
      </svg>
      <h5 className='mt-6 font-normal tracking-wider uppercase'>{label}</h5>
  </div>
</div>;
}

export default SkillProgress;
