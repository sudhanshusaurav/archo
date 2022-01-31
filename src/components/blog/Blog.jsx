import React from 'react';
import B1 from '../../assets/images/b1.jpg'
import B2 from '../../assets/images/b2.jpg'
import B3 from '../../assets/images/b3.jpg'
import BlogCard from './BlogCard';
import './blog.css'

function Blog() {

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
        return <BlogCard blog={blog} key={blog.title}/>;
    })
  return <div className='py-32'>
      <div className='w-[85%] mx-auto text-center'>
        <h5 className='tracking-[5px] text-primary font-teko text-lg'>LATEST NEWS</h5>
        <h1 className='my-8 text-5xl font-semibold leading-5 tracking-wider font-playfair'>Our Blogs</h1>
        <div className="flex gap-8">
                {renderBlogs}
        </div>
      </div>
  </div>;
}

export default Blog;
