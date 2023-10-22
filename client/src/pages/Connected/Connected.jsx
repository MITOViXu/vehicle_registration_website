// struct Vehicle{
//     string  vehicleOwner; // chủ xe (mã số CCCD)
//     string  numberPlate; // biển số xe
//     uint8  yearManufac; //năm sản xuất
//     uint8  lifetimeLimit; //niêm hạn sử dụng
//     string  insepectionReportN ; // số phiếu kiểm định
//     string  insepectionValidUntil; //hiệu lực đến nam
//     string typeOf; //loại phương tiện
//     string mark; //nhãn hiệu xe
//     uint256 modelCode; // số loại
//     uint256 chassicNum; //số khung
// }
import React from "react";
import "./Connected.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { abi, contractAddress } from "../../constant/constant";
import { ethers } from "ethers";
import admin from "../../assets/admin.png";
import CarCard from "../../components/CarCard/CarCard";
import Footer from "../../components/Footer/Footer";
const Connected = (props) => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  const adminInsert = async (e) => {
    e.preventDefault();
    const { contract } = props.car;
    const VehicleOwner = document.querySelector("#VehicleOwner").value;
    const numberPlate = document.querySelector("#numberPlate").value;
    const yearManufac = ethers.utils.parseUnits(
      document.querySelector("#yearManufac").value,
      0
    );
    const typeOf = document.querySelector("#typeOf").value;
    const mark = document.querySelector("#mark").value;
    const modelCode = ethers.utils.parseUnits(
      document.querySelector("#modelCode").value,
      0
    );
    const classicNum = ethers.utils.parseUnits(
      document.querySelector("#chassicNum").value,
      0
    );
    const lifetimeLimit = ethers.utils.parseUnits(
      document.querySelector("#lifetimeLimit").value,
      0
    );
    const insepectionReportN = document.querySelector(
      "#insepectionReportN"
    ).value;
    const insepectionValidUntil = document.querySelector(
      "#insepectionValidUntil"
    ).value;

    const transaction = await contract.storeVehicle(
      numberPlate,
      VehicleOwner,
      yearManufac,
      lifetimeLimit,
      insepectionReportN,
      insepectionValidUntil,
      typeOf,
      mark,
      modelCode,
      classicNum
    );
    await transaction.wait();
    alert("Transaction is successul");
    console.log("Transaction is successul");
    window.location.reload();
  };

  return (
    <div
      style={{
        padding: "10px",
        overflow: "hidden",
        background:
          "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgb(39, 85, 134) 38%,rgb(0, 76, 91) 100%)",
      }}
    >
      <Slider {...settings} className="slider">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
          className="admin-intro-1"
        >
          <div className="login-connected">
            <img src={admin} className="ad-avatar" alt="admin" />
            <div>
              <p className="admin-account">Chào mừng quản trị viên </p>
            </div>
          </div>
          <div className="box-address">
            <p className="admin-address">{props.account}</p>
            <button className="logout_button" onClick={props.logout}>
              Đăng xuất
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
          className="admin-intro-2"
        >
          <div className="login-connected">
            <img src={admin} className="ad-avatar" alt="admin" />
            <div>
              <p className="admin-account">Chào mừng quản trị viên </p>
            </div>
          </div>
          <div className="box-address">
            <p className="admin-address">{props.account}</p>
            <button className="logout_button" onClick={props.logout}>
              Đăng xuất
            </button>
          </div>
        </div>
      </Slider>
      <div className="register-title">Thành viên đăng ký mới</div>
      <div className="information-car-connected">
        <form class="form-connected" onSubmit={adminInsert}>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              type="text"
              required="required"
              id="VehicleOwner"
            />
            <label for="name">Nhập CCCD chủ xe:</label>
          </div>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              required="required"
              id="numberPlate"
            ></input>
            <label for="message">Nhập biển số xe:</label>
          </div>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              type="text"
              required="required"
              id="yearManufac"
            />
            <label for="name">Năm sản xuất:</label>
          </div>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              type="text"
              required="required"
              id="typeOf"
            />
            <label for="name">Loại phương tiện:</label>
          </div>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              type="text"
              required="required"
              id="mark"
            />
            <label for="name">Nhãn hiệu xe:</label>
          </div>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              type="text"
              required="required"
              id="modelCode"
            />
            <label for="name">Số loại:</label>
          </div>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              type="text"
              required="required"
              id="chassicNum"
            />
            <label for="name">Số khung:</label>
          </div>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              type="text"
              required="required"
              id="lifetimeLimit"
            />
            <label for="name">Niêm Hạn sử dụng:</label>
          </div>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              type="text"
              required="required"
              id="insepectionReportN"
            />
            <label for="name">Số phiếu kiểm định:</label>
          </div>
          <div class="form-group">
            <input
              style={{ fontSize: "15px", width: "500px" }}
              type="text"
              required="required"
              id="insepectionValidUntil"
            />
            <label for="name">Hiệu lực đến năm:</label>
          </div>
          <button className="button-add-info">Add info</button>
        </form>
      </div>

      <CarCard car={props.car} />
    </div>
  );
};

export default Connected;
