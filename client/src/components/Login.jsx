import React from "react";
import pic1 from "./pic1.jpg";
import "./Login.css";
import { useState, useEffect } from "react";
import { contractAbi, contractAddress } from "../constant/constant";
import { ethers } from "ethers";
const Login = (props) => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [Vehicleinfor, setVehicleinfor] = useState([]);
  const [numberPlate,setNumberPlate] = useState('');

  //function get Vehicle info
  async function searchInfo(numberPlate) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    const results = await contractInstance.getVehicleInfo(numberPlate);
    setVehicleinfor(results);
  }
  async function handleNumberPlateChange(e) {
    setNumberPlate(e.target.value);
  }
  return (
    <div className="login-container">
      <h1 style={{ marginBottom: "0px" }}>
        <span className="colorful-text">
          Vehicle Registry Decentralized Application Login
        </span>
      </h1>
      <h2 style={{ margin: "0px", color: "whitesmoke" }}>
        If you are admin please login below
      </h2>
      <button className="login-button" onClick={props.connectWallet}>
        Connect Metamask
      </button>

      <div className="find-car">
        <form class="form">
          <div class="form-group">
            <label for="name">Nhập CCCD chủ xe:</label>
            <input type="text" id="name" name="name" placeholder="CCCD" />
          </div>
          <div class="form-group">
            <label for="message">Nhập biển số xe:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Biển số xe"
              value={numberPlate}
              onChange={handleNumberPlateChange}
            ></textarea>
          </div>

          <button className="login-button" onClick={() =>{ searchInfo(numberPlate)}}>
            Search Information
          </button>
        </form>
      </div>

      <div className="information-car">
        <div class="form-group">
          <label for="name">Thông tin chủ xe</label>
          <input type="text" id="1" value={results.vehicleOwner} readOnly />
        </div>
        <div class="form-group">
          <label for="name">Biển số xe</label>
          <input type="text" id="2" value={numberPlate} readOnly />
        </div>
        <div class="form-group">
          <label for="name">Năm sản xuất</label>
          <input type="text" id="3" value={yearManufac} readOnly />
        </div>
        <div class="form-group">
          <label for="name">Loại phương tiện</label>
          <input type="text" id="7" value={typeOf} readOnly />
        </div>
        <div class="form-group">
          <label for="name">Nhãn hiệu xe</label>
          <input type="text" id="8" value={Mark} readOnly />
        </div>
        <div class="form-group">
          <label for="name">Số loại</label>
          <input type="text" id="9" value={modelCode} readOnly />
        </div>
        <div class="form-group">
          <label for="name">Số khung</label>
          <input type="text" id="10" value={chassicNum} readOnly />
        </div>
        <div class="form-group">
          <label for="name">Niêm Hạn sử dụng</label>
          <input type="text" id="4" value={lifeLimit} readOnly />
        </div>
        <div class="form-group">
          <label for="name">Số phiếu kiểm định</label>
          <input type="text" id="5" value={inspectN} readOnly />
        </div>
        <div class="form-group">
          <label for="name">Hiệu lực đến năm</label>
          <input type="text" id="6" value={inspectValid} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Login;
