import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './contact.css'

gsap.registerPlugin(ScrollTrigger)

function Contact() {

    useEffect(() => {
      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: '.contact__tl__init',
              start: 'top center'
          }
      })

      tl.fromTo('.contact__slide__right', {x: '-100%', opacity:0},{x:0, opacity:1, duration:1})
    }, []);
    

  return <div className="py-32 contact">
      <div className="w-[85%] mx-auto contact__tl__init">
          <form action="" className="contact-form contact__slide__right">
              <div className="input-group">
                  <label htmlFor="" className="input-label">Your Name</label>
                  <input type="text" name="" id="" required className="input-field"/>
              </div>
              <div className="input-group">
                  <label htmlFor="" className="input-label">Your Email</label>
                  <input type="email" name="" id="" required className="input-field"/>
              </div>
              <div className="input-group">
                  <label htmlFor="" className="input-label">Subject</label>
                  <input type="text" name="" id="" required className="input-field"/>
              </div>
              <div className="input-group">
                  <label htmlFor="" className="input-label">Message</label>
                  <textarea name="" id="" cols="30" rows="5" required className="input-field"></textarea>
              </div>
              <div className="">
                  <button type="submit" className="flex items-center justify-center w-full py-2 text-xl uppercase border font-teko text-primary border-primary hover:text-white hover:bg-primary el__hover">send message</button>
              </div>
          </form>
      </div>
  </div>;
}

export default Contact;
