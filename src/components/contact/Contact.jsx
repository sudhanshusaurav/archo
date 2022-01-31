import React from 'react';
import './contact.css'

function Contact() {
  return <div className="py-32 contact">
      <div className="w-[85%] mx-auto">
          <form action="" className="contact-form">
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
                  <button type="submit" className="flex items-center justify-center w-full py-2 text-xl uppercase border font-teko text-primary border-primary hover:text-white hover:bg-primary">send message</button>
              </div>
          </form>
      </div>
  </div>;
}

export default Contact;
