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

  //const [numberPlate, setNumberPlate] = useState("");
  // const { contractInstance } = props.car;

  //   async function handleNumberPlateChange(e) {
  //     setNumberPlate(e.target.value);
  //   }

  //   const handleSubmit = async (e) => {
  //     try {
  //       const provider = new ethers.providers.JsonRpcProvider(
  //         "https://eth-sepolia.g.alchemy.com/v2/MPMfIIQQw3C8j6ZPKtmlX-dBPCSE7rmU"
  //       );
  //       const contractInstance = new ethers.Contract(
  //         contractAddress,
  //         abi,
  //         provider
  //       );
  //       const results = await contractInstance.getVehicleInfo(numberPlate);
  //       setVehicleinfor(results);
  //       console.log(numberPlate)
  //       console.log(vehicleinfor)
  //     } catch (e) {console.log(e)}
  //   };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const numberPLate = document.querySelector("#message").value;
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-sepolia.g.alchemy.com/v2/MPMfIIQQw3C8j6ZPKtmlX-dBPCSE7rmU"
      );
      const contractInstance = new ethers.Contract(
        contractAddress,
        abi,
        provider
      );
      const results = await contractInstance.getVehicleInfo(numberPLate);
      setVehicleinfor(results);
      console.log(numberPLate);
      console.log(vehicleinfor);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <HersoSlider />
      <dicv className="home" style={{ marginTop: "70px" }}>
        <div className="HeroSlider"></div>
        <div className="FindCar"><FindCar Submit={handleSubmit} /></div>
        <div className="ResultSearchCar"><ResultSearchCar /></div>
        <div className="AboutUs"><AboutUs /></div>
        {/* {vehicleinfor == null ? (
          <div>
          
          </div>
        ) : (
        <div className="ResultSearchCar"><ResultSearchCar /></div>
        )} */}
      </dicv>
      <SliderAnimate />
    </div>
  );
};

export default Home;
