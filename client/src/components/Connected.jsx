import React from "react";
import pic2 from "./pic2.jpg";
import "./Connected.css";
import { useState, useEffect } from "react";
import { contractAbi, contractAddress } from "../constant/constant";
import { ethers } from "ethers";

const Connected = (props) => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  return (
    <div className="page2-container">
      <h1>
        <span style={{ color: "white" }}>
          Welcome admin to decetralization app
        </span>
      </h1>


      <div className="information-car">
        <div class="form-group">
          <label for="name">Thông tin chủ xe</label>
          <input type="text" id="1" value={veicleOwner} readOnly />
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

        <button className="login-button" onclick={addInfor}>
                        Add Information
        </button>
      </div>

    </div>
  );
};

export default Connected;
