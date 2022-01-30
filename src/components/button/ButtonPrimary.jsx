import React, { useEffect } from 'react';
import './button.css'

function ButtonPrimary(props) {

  useEffect(() => {
    const btns = document.querySelectorAll('.btn')

    btns.forEach(btn => {
      const btnBg = document.querySelector(`.btn-bg`)
      btn.addEventListener('mouseenter', function(){
        btn.lastChild.setAttribute('style', 'height:100%; top:0; bottom:unset;')
      })

      btn.addEventListener('mouseleave', function(){
        // btn.style.transform = `translateX(0px) translateY(0px)`
        btn.lastChild.setAttribute('style', 'height:0; top:unset; bottom:0;')
      })
    });
  }, []);
  

  return <button className={`btn btn-primary ${props.className}`} id={props.id} data-speed="3" data-text={props.label}>{props.label} <span className='btn-bg btn-primary-bg'></span></button>;
}

export default ButtonPrimary;
