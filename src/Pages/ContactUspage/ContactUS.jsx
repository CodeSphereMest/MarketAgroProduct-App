import React from 'react';
import { soybean } from '../../assets/images';



function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <img src={soybean} alt="Contact Us" className="contact-image" />
        <div className="contactOverlay">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;