import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import B1 from '../../assets/images/b1.jpg'
import B2 from '../../assets/images/b2.jpg'
import B3 from '../../assets/images/b3.jpg'
import BlogCard from './BlogCard';
import './blog.css'

gsap.registerPlugin(ScrollTrigger)

function Blog() {

    useEffect(() => {
      let tl = gsap.timeline({
          scrollTrigger: {
              trigger: '.blog__tl__init',
              start: 'top center'
          }
      })

      tl.fromTo('.blog__slide__bottom', {y: -150, opacity: 0}, {y:0, opacity: 1, duration: 1, stagger: .5})
      tl.fromTo('.blog__reveal__down', {clipPath:'polygon(0 0, 100% 0, 100% 0, 0 0)'},{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', duration:.5, stagger:.5})
    }, []);
    
    const blogData = [
        {
            image:B1,
            date: '01 JAN 2022',
            title: 'Winners nver quit and quitters never win.'
        },
        {
            image:B2,
            date: '22 JAN 2022',
            title: 'The main component of a healthy environment for better life.'
        },
        {
            image:B3,
            date: '12 DEC 2021',
            title: 'Five things you should know about modern furniture.'
        }
    ]

    const renderBlogs = blogData.map(blog => {
        return <div className='blog__reveal__down'><BlogCard blog={blog} key={blog.title}/></div>;
    })
  return <div className='py-32'>
      <div className='w-[85%] mx-auto text-center blog__tl__init'>
        <h5 className='tracking-[5px] text-primary font-teko text-lg blog__slide__bottom'>LATEST NEWS</h5>
        <h1 className='my-8 text-5xl font-semibold leading-5 tracking-wider font-playfair blog__slide__bottom'>Our Blogs</h1>
        <div className="flex gap-8 mt-12">
                {renderBlogs}
        </div>
      </div>
  </div>;
}

export default Blog;
