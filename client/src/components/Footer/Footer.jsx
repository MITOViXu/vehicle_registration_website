import React from'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer_container'>
        <div className="footer_content_container">
            <div className="container_1">
                <div className="rent-car">
                    <div className="footer_header-content">
                        <div className="img_rent-car">
                            <img src={'car.png'} alt="" />
                        </div>
                        <div className="rent-car_header">Rent Car Service</div>
                    </div>
                    <p className="footer_content" id='rent-car-content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex quam veniam, omnis expedita animi quibusdam obcaecati mollitia? Delectus et ad illo recusandae temporibus?
                    </p>
                </div>
                <div className="quick-links">
                    <div className="footer_header-content">
                       Quick Links
                    </div>

                    <div className="footer_content">
                        <div id='quick-links'>About</div>
                        <div id='quick-links'>Privacy Podivcy</div>
                        <div id='quick-links'>Car Listing</div>                        
                        <div id='quick-links'>Blog</div>                        
                        <div id='quick-links'>Contact</div>                        
                    </div>
                </div>

                <div className="head-office">
                    <div className="footer_header-content">
                        Head Office
                    </div>

                    <div className="footer_content">
                        <div>123 Zindabazar, Sylhet, Bangladesh</div>
                        <div>Phone: +0995345875365</div>
                        <div>Email: muhib5532@gmail.com</div>                        
                        <div>Office Time: 10am - 7pm</div>                                              
                    </div>

                </div>

                <div className="newsletter">
                    <div className="footer_header-content">
                        Newsletter   
                    </div>

                    <div className="footer_content" style={{marginTop: '10px'}}>
                        <div>Subscribe our newsletter</div>                                          
                    </div>

                    <div className="input_container">
                        <input type="text" className="email_input" placeholder="Email" />
                        <button className="btn_input"></button>
                    </div>

                </div>
            </div>
            <div className="copyright">
                <hr />
                <div className="copyright_info">
                    <img src={'copyright.png'} alt="logo" />
                    Copyright 2023, Developed by Muhibur Rahman. All rights reserved.
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Footer