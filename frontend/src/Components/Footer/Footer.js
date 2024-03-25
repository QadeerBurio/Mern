import React  from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'



const Footer = () => {
    
   
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt='' />
                <p>AQ_Outfit</p>
            </div>
            <ul className='footer-links'>
            <Link to={'/company'} style={{textDecoration:'none'}}><li>Company</li></Link>
                <Link to={'/mens'} style={{textDecoration:'none'}}><li>Product</li></Link>
                <Link to={'/office'} style={{textDecoration:'none'}}><li>Offices</li></Link>
                <Link to={'/about'} style={{textDecoration:'none'}}><li>About</li></Link>
                <Link to={'/contact'} style={{textDecoration:'none'}}><li>Contact</li></Link>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                <Link to={'https://www.instagram.com/aq_khan_556?igsh=MWM4NXI0a2wwb3lu'}><img src={instagram_icon} alt='' /></Link>
                </div>
                <div className='footer-icons-container'>
                <Link to={'https://www.linkedin.com/in/aq-khan-4ab19426b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><img src={pintester_icon} alt='' /></Link>
                </div>
                <div className='footer-icons-container'>
                <Link to={'03153440945'}><img src={whatsapp_icon} alt='' /></Link>
                </div>
            </div>
           
           
           
            <div className='footer-copyright'>
            <hr/>
            <p>copyright @2024 - All Right Reserved.</p>
            

            </div>
           

        </div>
    )
}

export default Footer
