import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Logo from '../../assets/images/logo.png'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './footer.css'

gsap.registerPlugin(ScrollTrigger)

function Footer() {

    useEffect(() => {
      let tl = gsap.timeline()

      ScrollTrigger.create({
          animation: tl,
          trigger: '.footer__tl__init',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 3
      })

      tl.fromTo('.footer__slide__top', {y: 400},{y:-40})
    }, []);
    

  return <div className="relative pt-32 overflow-y-hidden footer__tl__init">
      <div className="w-[85%] pb-16 md:pb-0 mx-auto flex flex-col md:flex-row text-white  footer__slide__top">
        <div className="md:basis-[40%] mb-12 md:mb-0">
            <img src={Logo} alt="logo" className="mx-auto md:mx-0 el__hover"/>
            <p className="my-6 text-sm md:w-1/2">Our team takes over everything, from an idea and concept development to realization.</p>
            <div className="flex justify-center md:justify-start">
                <span className="footer__icon el__hover"><FaFacebookF/></span><span className="footer__icon el__hover"><FaTwitter/></span><span className="footer__icon el__hover"><FaLinkedin/></span><span className="footer__icon el__hover"><FaInstagram/></span>
            </div>
            <p className="md:mb-6 md:mt-16 text-[12px] text-white/50 md:text-white font-thin md:static absolute bottom-0 left-4">© 2020, Archo Template. Made with passion by Sudhanshu Saurav.</p>
        </div>
        <div className="flex flex-wrap flex-1 gap-6">
            <div className="flex-1">
                <h5 className="font-semibold text-primary">CALL</h5>
                <hr className="mt-4 text-primary/50"/>
                <div className="mt-8 text-sm font-thin leading-6 text-white/50">
                    <p>+91 1234567890</p>
                    <p>+91 0987654321</p>
                </div>
            </div>
            <div className="flex-1">
                <h5 className="font-semibold text-primary">WRITE</h5>
                <hr className="mt-4 text-primary/50"/>
                <div className="mt-8 text-sm font-thin leading-6 text-white/50">
                    <p>contact@archo.com</p>
                    <p>help@archo.com</p>
                </div>
            </div>
            <div className="flex-1">
                <h5 className="font-semibold text-primary">VISIT</h5>
                <hr className="mt-4 text-primary/50"/>
                <div className="mt-8 text-sm font-thin leading-6 text-white/50">
                    <p>B17 Princess Road, <br /> NOida, Greater Noida <br /> NW18JR, Delhi NCR, <br /> INDIA</p>
                </div>
            </div>
        </div>
    </div>
      <div className="absolute -bottom-0 left-0 w-full h-full bg-gray z-[-1]"></div>
  </div>;
}

export default Footer;
