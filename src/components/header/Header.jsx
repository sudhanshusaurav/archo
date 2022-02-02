import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import LogoDark from '../../assets/images/logo-dark.png';
import {FaFacebookF, FaTwitter, FaInstagram, FaSearch} from 'react-icons/fa'
import './header.css';

function Header({stickyHeader}) {

  const [navActive, setNavActive] = useState(false);

  return (
  <header className='header'>
    <div className='flex w-[85%] mx-auto flex-row items-center justify-between h-full'>
      <div className='basis-[30%]'>
          <Link to='/'><img src={stickyHeader ? LogoDark : Logo} alt="logo" className='el__hover'/></Link>
      </div>
      <nav className={`fixed top-0 right-0 flex flex-col items-center justify-center flex-1 w-full h-full gap-8 bg-gray lg:bg-transparent lg:static lg:flex-row clip-top lg:clip-full transition-all duration-500 z-[900] ${navActive?'clip-full':''}`}>
        <ul className='flex flex-col items-center gap-6 mb-16 lg:mb-0 lg:flex-1 lg:flex-row'>
          <li><Link to='' className='nav__link el__hover'>Home </Link></li>
          <li><Link to='' className='nav__link el__hover'>About Us </Link></li>
          <li><Link to='' className='nav__link el__hover'>Portfolio </Link></li>
          <li><Link to='' className='nav__link el__hover'>Blogs </Link></li>
          <li><Link to='' className='nav__link el__hover'>Contact Us </Link></li>
        </ul>
        <ul className='flex items-center justify-end gap-5 lg:gap-3 lg:flex-1'>
          <li><Link to='' className='text-2xl md:text-3xl lg:text-[14px] el__hover'><FaFacebookF/></Link></li>
          <li><Link to='' className='text-2xl md:text-3xl lg:text-[14px] el__hover'><FaTwitter/></Link></li>
          <li><Link to='' className='text-2xl md:text-3xl lg:text-[14px] el__hover'><FaInstagram/></Link></li>
          {/* <li><span  className="header__search__wrapper"><input type="search" name="" id="" className='header__search'/></span></li> */}
          <li className='el__hover'><FaSearch className='hidden lg:block lg:text-[14px]'/></li>
        </ul>
      </nav>
      <div onClick={()=>{setNavActive(!navActive)}} className={`hamburger lg:hidden ${navActive ? 'hamburger--active' : ''}`}>
        <div className={`hamburger__bar ${stickyHeader && !navActive? 'bg-primary-dark':'bg-white'}`}></div>
        <div className={`hamburger__bar ${stickyHeader && !navActive? 'bg-primary-dark':'bg-white'}`}></div>
      </div>
    </div>
  </header>);
}

export default Header;
