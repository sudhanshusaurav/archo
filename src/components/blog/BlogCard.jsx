import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({blog}) {
  return <div className=''>
        <div className=''>
            <img src={blog.image} alt="blog" className='w-full'/>
        </div>
        <div className='w-10/12 px-8 py-12 ml-auto -mt-8 relative z-[2] text-left bg-white'>
            <p className='text-xs text-gray/60'>ADMIN &nbsp; {blog.date}</p>
            <h3 className='my-4 text-lg font-semibold font-playfair'>{blog.title}</h3>
            <Link to='' className="mt-2 border-none el__hover btn btn-secondary-light">Read More</Link>
        </div>
  </div>;
}

export default BlogCard;
