import React from 'react'
import './Contact.css'
import Maps from '../Maps/Maps'
const Contact = () => {
  return (
    <div className="contact-container">
    <div className="left-side">
      <h2>Contact Us</h2>
      <h3>Have questions or feedback? We'd love to hear from you!</h3>
      <div className="contact-info">
        <p>Email: info@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
        {/* Add more contact information as needed */}
      </div>
    
      <form className="contact-form">
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Subject</label>
        <input type="text" name="subject" required />
        <label>Message</label>
        <input type="text" name="message" required />
        
        <button type="submit">Submit</button>
      </form>
     
      </div>
     
      <div className="right-side">
       
        <Maps/>
        
      </div>
    </div>
  )
}

export default Contact
