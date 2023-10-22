import React, {useState} from 'react'
import { ethers } from 'ethers';
import { contractAddress, abi } from '../../constant/constant';
import "./FindCar.css"
const FindCar = (props) => {
  const [provider, setProvider] = useState(null);
  const [vehicleinfor, setVehicleinfor] = useState(null);
  async function handleSubmit (e){
    try {
      e.preventDefault();
      const numberPLate = document.querySelector("#message").value;
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-sepolia.g.alchemy.com/v2/MPMfIIQQw3C8j6ZPKtmlX-dBPCSE7rmU"
      );
      const contract = new ethers.Contract(contractAddress, abi, provider);
      const results = await contract.getVehicleInfo(numberPLate);
      setVehicleinfor(results);
      console.log(results);
      props.addInfo(results); 
    } catch (error) {
      console.error("Error fetching cars from contract:", error);
    }
  };
  return (
    <div className="find-car-home">
      <div className="find-car-pic">
        <h1 style={{fontSize:'50px'}}>Find You Cars Here</h1>
      </div>
      <div className="find-car-infor">
      <form class="form-home" onSubmit={handleSubmit}>
        <div class="form-group-home">
          <label for="name">Nhập CCCD chủ xe:</label>
          <input type="text" id="name" name="name" placeholder="CCCD" />
        </div>
        <div class="form-group-home">
          <label for="message">Nhập biển số xe:</label>
          <input
            id="message"
            name="message"
            placeholder="Biển số xe"
          ></input>
        </div>
        <button className="login-button-home">Search Information</button>
      </form>
      </div>
    </div>
  )
}

export default FindCar