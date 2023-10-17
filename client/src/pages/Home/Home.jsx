import React from "react";
import './Home.css'
import '../../components/FindCar/FindCar.jsx'
import { useState, useEffect } from "react";
import { abi, contractAddress } from "../../constant/constant";
import { ethers } from "ethers";
import FindCar from "../../components/FindCar/FindCar.jsx";
import '../../components/HeroSlider/HeroSlider.jsx';
import '../../components/AboutUs/AboutUs.jsx';
import ResultSearchCar from "../../components/ResultSearchCar/ResultSearchCar";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";

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
    <div className="login-container-home">
     <FindCar Submit={handleSubmit}/>
      {/* {vehicleinfor == null ? (
        <div>
          <h1>
            <span style={{}}>You didn't search yet</span>
          </h1>
        </div>
      ) : (
      <ResultSearchCar vehicleinfor={vehicleinfor} />
      )} */}
      <AboutUs />
    </div>
    </div>
  );
};

export default Home;
