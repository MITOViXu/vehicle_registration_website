import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about_container'>
      <div className="about_page-section">
        <div className="page-about_img">
          <img src={'drive.b72e6f2d1ccdbd6550a9.jpg'} alt="safe-ride-solution" />
        </div>
        <div className="safe-ride-text">
          <h2 className="section-title">We Are Committed To Provide Safe Ride Solutions</h2>
          <p className="section_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsam.</p>
          <p className="section_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet veniam assumenda aperiam accusantium ex autem perferendis repellendus nostrum delectus. Nemo et dolore est tempore rem minima adipisci magni dolorum ipsam.</p>
          <div className="about_questions">
            <img src={'telephone.png'} alt="phone" />
            <div className="about_question-content">
              <div className="section-subtitle">Need Any Help?</div>
              <h4>+00123456789</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default About