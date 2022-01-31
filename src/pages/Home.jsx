import React from 'react';
import AboutUs from '../components/aboutUs/AboutUs';
import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';
import Employees from '../components/employees/Employees';
import Footer from '../components/footer/Footer';
import Hero from '../components/Hero';
import Portfolio from '../components/portfolio/Portfolio';
import Services from '../components/services/Services';
import Skills from '../components/skills/Skills';
import Testimonials from '../components/testimonials/Testimonials';

function Home() {
  return (
  <div>
      <Hero/>
      <AboutUs/>
      <Services/>
      <Portfolio/>
      <Skills/>
      <Testimonials/>
      <Employees/>
      <Blog/>
      <Contact/>
      <Footer/>
  </div>
  );
}

export default Home;
