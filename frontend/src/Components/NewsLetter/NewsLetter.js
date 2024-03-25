import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>Get Exclusive Offer On your Email</h1>
    <p>Subscribe Our newsletter and stay updated</p>
    <div>
        <input type='email' placeholder='Enter Your Email' />
        <button>Subscribe</button>
    </div>
      
    </div>
  )
}

export default NewsLetter
