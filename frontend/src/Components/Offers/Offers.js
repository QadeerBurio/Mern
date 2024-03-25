import React from 'react'
import './Offers.css'
import product_28 from '../Assets/product_28.png'
import { Link } from 'react-router-dom'
const Offers = () => {
    return (
       <div className='offer'>
        <div className='offers-left'>
        <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>Only On Best Sellers Product</p>
                <Link to={'/'}><button>Check Now</button></Link>
        </div>
        <div className='offers-right'>
            <img src={product_28} alt='' />
        </div>
       </div>
    )
}

export default Offers
