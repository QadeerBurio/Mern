import React from 'react'
import './About.css'
import aqpic from '../Assets/aqpic.jpeg'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='data'>
      <div className="about">
        <div className='heading'>
          <h2>Welcome to Our Ecommerce Website</h2>
          <p>
            At OurCompany, we are dedicated to providing you with the best shopping experience possible.
            Our journey began in [year] with a simple mission: to offer high-quality products at affordable prices.
          </p>
          <h3>Our Story</h3>
          <p>
            [Insert your company's story here]
          </p>
          <h3>Meet Our Team</h3>
        </div>
        <hr />
        <div className="contact-container">
          <div className="team-members">
            <div className="team-member">
              <img src={aqpic} alt="Team Member 1" />
              <h4> CEO: AQ Khan</h4>
              
            </div>
            <div className="team-member">
              <img src={aqpic} alt="Team Member 2" />
              <h4>Marketing Director: Masood </h4>
              
            </div>
            <div className="team-member">
              <img src={aqpic} alt="Team Member 2" />
              <h4>Founder: Samee Buriro</h4>
            </div>

          </div>

          <div className="rightside">
            <div className='right'>
              <h3>Our Values</h3>
              <p>
                In the realm of ecommerce, our website stands as a beacon of customer-centric values, prioritizing trust, transparency, and quality. With a relentless pursuit of innovation, we ensure a seamless shopping experience for all. Our commitment to accessibility and sustainability underscores our dedication to inclusivity and responsibility. Together, we're not just a platform for transactions; we're a community-driven destination, fostering meaningful connections and lasting impressions.
              </p>
              <h3>Quality Assurance</h3>
              <p>
              Our quality assurance process is meticulous, ensuring every product meets our stringent standards before reaching our customers. From sourcing to delivery, we employ rigorous checks to guarantee excellence in every purchase. With a relentless commitment to quality, we strive to exceed expectations and build trust with our valued clientele.
              </p>
              <h3>Community Engagement</h3>
              <p>
                Community engagement is at the heart of our ethos. We actively listen to our customers, respond to their needs, and foster meaningful connections. Through initiatives like forums, social media engagement, and local events, we cultivate a sense of belonging and collaboration. Together, we shape our brand's journey and create positive impacts in our shared communities.
              </p>
              <h3>Contact Us</h3>
              <p>
                Have questions or feedback? Feel free to reach out to us
              </p>
              <Link to={'/contact'}><button className='btn'> Click Here</button></Link>
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default About





