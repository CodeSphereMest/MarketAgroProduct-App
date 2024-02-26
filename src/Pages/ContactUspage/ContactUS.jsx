import React from 'react';

// import { soybean } from '../../assets/images';
// import React, { useState } from 'react';



function ContactUs() {

  // const ContactUs = () => {
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     message: ''
  //   });
  
  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };
  
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  
  //     try {
  //       const response = await fetch('/api/contact', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(formData)
  //       });
  
  //       if (response.ok) {
  //         // Form submission successful, handle response as needed
  //         console.log('Form submitted successfully');
  //       } else {
  //         // Handle error
  //         console.error('Form submission failed');
  //       }
  //     } catch (error) {
  //       console.error('Error submitting form:', error);
  //     }
  //   };

  return (
  
    <div className="contact-us-container">
      <div className="background-image">
        <div className="contact-form-container">
          <h1 className='contact'>Contact Us</h1>
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
    </div>

    
  );
};

export default ContactUs;