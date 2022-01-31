import React, { useEffect } from 'react';
import './cursor.css'

function Cursor() {

    useEffect(() => {
      const cursor = document.querySelector('.cursor')
      const cursorBallInner = document.querySelector('.cursor__ball--inner')
      const cursorBallOuter = document.querySelector('.cursor__ball--outer')

      const hoverables = document.querySelectorAll('.el__hover')

      document.addEventListener('mousemove', function (e) {
          let x = e.clientX
          let y = e.clientY
          cursor.style.opacity = 1
          cursorBallInner.setAttribute('style', `top: ${y-4}px; left:${x-4}px;`)
          cursorBallOuter.setAttribute('style', `top: ${y-20}px; left:${x-20}px;`)
      })

      document.addEventListener('mouseleave', function (e) {
        cursor.style.opacity = 0
      })

      const cursorEnter = () => {
        cursorBallInner.classList.remove('opacity-100')
          cursorBallInner.classList.add('opacity-0')
          cursorBallOuter.classList.remove('bg-transparent', 'scale-[1]', 'border')
          cursorBallOuter.classList.add('bg-primary/50', 'scale-[2]', 'border-none')
      }

      
      const cursorLeave = () => {
        cursorBallInner.classList.remove('opacity-0')
        cursorBallInner.classList.add('opacity-100')
        cursorBallOuter.classList.remove('bg-primary/50', 'scale-[2]', 'border-none')
        cursorBallOuter.classList.add('bg-transparent', 'scale-[1]', 'border')
    }

      hoverables.forEach(hoverable => {
          hoverable.addEventListener('mouseenter', cursorEnter)
          hoverable.addEventListener('mouseleave', cursorLeave)
      });
    }, []);
    

  return <div className='opacity-0 cursor'>
      <div className="cursor__ball cursor__ball--inner">
      </div>
      <div className="transition-all duration-100 ease-linear cursor__ball cursor__ball--outer">
      </div>
  </div>;
}

export default Cursor;
