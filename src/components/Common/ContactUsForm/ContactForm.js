import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import exploreIcon from '../../../assets/icons/go-icon.png';

import './contactForm.css';

const ContactForm = () => {
    const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data:", data);
    
    // Here, you can send `data` to an API or handle it as needed
  };

  return (
    <section className="pageModal contactUs_section text-center">
        <h2 className="">Contact Our Team</h2>
        <p className="my-2">
            Have questions or need guidance? Our dedicated team is here to help! 
            Whether it's about courses, enrollment, or general inquiries, 
            we're just a message away. 
            Reach out, and let's make your Cosmos Academy experience seamless!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-5 d-flex flex-column gap-4">
            <input type="text" name="fullName" placeholder="Full Name" className="form-control" required />
            <input type="text" name="subject" placeholder="Subject" className="form-control" required />
            <input type="email" name="email" placeholder="Email Address" className="form-control" required />
            <textarea name="message" placeholder="How can we help?" className="form-control" rows="4" required></textarea>

            <div className="btn-action_div justify-content-center my-4 mb-5">
            <button type="submit" className="customBtn">
                <span>Send Message</span> <img src={exploreIcon} alt="icon" />
            </button>
            </div>
        </form>
    </section>
  )
}

export default ContactForm