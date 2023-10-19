import React from "react";
import "./NotConnected.css";
import carLogo from "../../assets/carLogo.png";
import location from "../../assets/location.png";
import admin from "../../assets/admin.png";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
const NotConnected = (props) => {
  document.title = "Admin Car";

  return (
    <div style={{marginTop:"70px"}}>
      <div className="connect_div">
        <div className="connect_intro">
          <img className="connect_intro_logo" src={carLogo} alt="" />
          <p className="connect_intro_title">
            Trung tâm đăng kiểm xe
            <br />
            Thủ Đức <img src={location} alt="" />{" "}
          </p>
        </div>
        <di className="connect_middle">
          <h1 className="connect_middle_title">Trang web dành cho quản trị</h1>
          <img className="connect_middle_logo" src={admin} alt="" />
        </di>
        <button className="login" onClick={props.connectWallet}>
          Xác minh Tài khoản
        </button>
      </div>
      {/* ============= hero section =========== */}
      <section className="hero">
        <HeroSlider />
      </section>
    </div>
  );
};

export default NotConnected;
