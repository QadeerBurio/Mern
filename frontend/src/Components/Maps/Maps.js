import React from 'react'
import './Map.css'
import location from '../Assets/location.png'
import contact from '../Assets/contact.png'
import gmail from '../Assets/gmail.png'
const Maps = () => {
  return (
    <>
   
    
    <div className='datas'>
     
    
  <div className='address'>
    <img  src={location} alt='' />
    <address>Jamshoro Mehran University</address>
  </div>
  <div className='contact'>
    <img src={contact} alt='' />
    <address>+923153440945</address>
  </div>
  <div className='gmail'>
    <img src={gmail} alt='' />
    <p>abdulqadeerburiro67@gmail.com</p>
  </div>
</div>
  
      <div className='map'>
      <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49542624.63092939!2d-147.81565909999998!3d40.7214982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25983e7431fa7%3A0xfff0db0bc0f62133!2sAssembly%20New%20York!5e0!3m2!1sen!2s!4v1710192069280!5m2!1sen!2s" width="500" height="350"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Maps
