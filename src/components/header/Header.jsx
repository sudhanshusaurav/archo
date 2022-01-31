import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import LogoDark from '../../assets/images/logo-dark.png';
import {FaFacebookF, FaTwitter, FaInstagram, FaSearch} from 'react-icons/fa'
import './header.css';

function Header({stickyHeader}) {
  return (
  <header className='header'>
    <div className='flex w-[85%] mx-auto items-center justify-between h-full'>
      <div className='basis-[30%]'>
          <Link to='/'><img src={stickyHeader ? LogoDark : Logo} alt="logo" className='el__hover'/></Link>
      </div>
      <nav className='flex items-center flex-1 gap-8'>
        <ul className='flex items-center flex-1 gap-6'>
          <li><Link to='' className='nav__link el__hover'>Home </Link></li>
          <li><Link to='' className='nav__link el__hover'>About Us </Link></li>
          <li><Link to='' className='nav__link el__hover'>Portfolio </Link></li>
          <li><Link to='' className='nav__link el__hover'>Blogs </Link></li>
          <li><Link to='' className='nav__link el__hover'>Contact Us </Link></li>
        </ul>
        <ul className='flex items-center justify-end flex-1 gap-3'>
          <li><Link to='' className='text-[14px] el__hover'><FaFacebookF/></Link></li>
          <li><Link to='' className='text-[14px] el__hover'><FaTwitter/></Link></li>
          <li><Link to='' className='text-[14px] el__hover'><FaInstagram/></Link></li>
          {/* <li><span  className="header__search__wrapper"><input type="search" name="" id="" className='header__search'/></span></li> */}
          <li className='el__hover'><FaSearch className='text-[14px]'/></li>
        </ul>
      </nav>
    </div>
  </header>);
}

export default Header;
