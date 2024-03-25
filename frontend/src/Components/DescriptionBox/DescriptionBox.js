import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
    <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
    </div>
      <div className='descriptionbox-description'>
        <p>An eCommerce website serves as an innovative online platform designed to seamlessly facilitate the buying and selling of products or services over the internet. At [Your eCommerce Website], we pride ourselves on providing a cutting-edge virtual marketplace where consumers can explore a vast array of offerings and sellers can reach a global audience with ease.
         </p>
         <p>With the rise of digital connectivity, eCommerce has revolutionized the way people shop and conduct business. Our platform harnesses the power of technology to create a dynamic and user-friendly environment where transactions can be completed securely and efficiently.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
