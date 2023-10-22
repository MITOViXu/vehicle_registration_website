import React from "react";
import "./Home.css";
import "../../components/FindCar/FindCar.jsx";
import { useState, useEffect } from "react";
import { abi, contractAddress } from "../../constant/constant";
import { ethers } from "ethers";
import FindCar from "../../components/FindCar/FindCar.jsx";
import SliderAnimate from "../../components/SliderAnimate/SliderAnimate";
import ResultSearchCar from "../../components/ResultSearchCar/ResultSearchCar.jsx";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import HersoSlider from "../../components/HeroSlider/HeroSlider.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = (props) => {
  const [provider, setProvider] = useState(null);
  const [vehicleinfor, setVehicleinfor] = useState(null);
  async function addInfo(info) {
    setVehicleinfor(info);
  }
  return (
    <div>
      <HersoSlider />
      <div className="home" style={{ marginTop: "70px" }}>
        <div className="FindCar">
          <FindCar addInfo={addInfo} />
        </div>
        {vehicleinfor ? (
          <div className="ResultSearchCar">
            <ResultSearchCar vehicleinfor={vehicleinfor} />
          </div>
        ) : (
          <div></div>
        )}
        <div className="AboutUs">
          <AboutUs />
        </div>
        {/* {vehicleinfor == null ? (
          <div>
          
          </div>
        ) : (
        <div className="ResultSearchCar"><ResultSearchCar /></div>
        )} */}
      </div>
      <SliderAnimate />
      <Footer />
    </div>
  );
};

export default Home;
