import React from "react";
import "./About.css";
import Footer from "../../components/Footer/Footer.jsx";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import SliderAnimate from "../../components/SliderAnimate/SliderAnimate.jsx";

const About = () => {
  return (
    <div>
      <div className="about_container">
        <div className="HeroSlider">
          {" "}
          <HeroSlider />
        </div>
        <div className="AboutUs">
          <AboutUs />
        </div>
        <div className="about_page-section">
          <div className="page-about_img">
            <img
              src={"drive.b72e6f2d1ccdbd6550a9.jpg"}
              alt="safe-ride-solution"
            />
          </div>
          <div className="safe-ride-text">
            <h2 className="section-title">
              We Are Committed To Provide Safe Ride Solutions
            </h2>
            <p className="section_description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              veniam assumenda aperiam accusantium ex autem perferendis
              repellendus nostrum delectus. Nemo et dolore est tempore rem
              minima adipisci magni dolorum ipsam.
            </p>
            <p className="section_description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              veniam assumenda aperiam accusantium ex autem perferendis
              repellendus nostrum delectus. Nemo et dolore est tempore rem
              minima adipisci magni dolorum ipsam.
            </p>
            <div className="about_questions">
              <img src={"telephone.png"} alt="phone" />
              <div className="about_question-content">
                <div className="section-subtitle">Need Any Help?</div>
                <h4>+0942917989</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="become-driver">
          <div className="become-driver_img">
            <img src={"toyota-offer-2.861de085d1c782df9e9d.png"} alt="car" />
          </div>
          <div className="become-driver_content">
            <h2 className="become_driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>
            <button className="become_driver-btn">Become a Driver</button>
          </div>
        </div>
      </div>

      <div className="SliderAnimate">
        <SliderAnimate />
      </div>
    </div>
  );
};

export default About;
