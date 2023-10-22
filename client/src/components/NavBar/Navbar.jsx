import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./Navbar.css";
const navLinks = [
  {
    path: "/home",
    display: "Trang chủ",
  },
  {
    path: "/admin",
    display: "Ban quản lí",
  },
  {
    path: "/about",
    display: "Chi tiết",
  },
];

const Navbar = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    //className="navigation__wrapper d-flex align-items-center justify-content-between"
    
    <div className="main_navbar" style={{position:"absolute", right:"0", left:"0", top:"0", zIndex:"10000"}}>

      <div className="topbar">

        <div className="need-help">
          <div className="need-help_text">Cần trợ giúp?</div>
          <div className="icon-container">
            <img src={'telephone.png'} alt="telephone" className="need-help-icon" />  
          </div>
          <div className="need-help-number">1900 1000</div>
        </div>

        <div className="login-register">
          <div className="login-nav">
            <img src={'login.png'} alt="login" className="topbar-icon"/>
            Login
          </div>
          <div className="register-nav">
            <img src={'user.png'} alt="register" className="topbar-icon"/>
            Register
          </div>
            
        </div>
      </div>

        <div className="time-location">

          <div className="website-name">

            <div className="website-logo">
              <img src={'car.png'} alt="logo" className="logo" />
            </div>

            Website Đăng Kiểm

          </div>

          <div className="location">

            <img src={'planet-earth.png'} alt="earth" className="logo" />
            <div>
              <div className="location-country">Việt Nam</div>
              <div className="location-city">Hồ Chí Minh</div>
            </div>

          </div>
          
          <div className="time">
            <img src={'clock.png'} alt="clock" className="logo" />
            <div>
              <div className="time-date">Sunday</div>
              <div className="time-hour">10am-8pm</div>
            </div>
          </div>

          <div className="request-call">
            <img src={'telephone.png'} alt="telephone" className="request-call-icon" />
            <button className="request-call-btn">Tư vấn</button>
          </div>
        
        </div>

      <div className="navigation" ref={menuRef} onClick={toggleMenu}>
      
        <div className="menu">
          {navLinks.map((item, index) => (
              <NavLink
                to={item.path}
                className={(a) =>
                  a.isActive ? "nav_item nav_active" : "nav_item"
                }
                key={index}
              >
                {item.display}
              </NavLink>
          ))}
        </div>

        <div className="navbar_search">
          <input type="text" placeholder="Search" className="search-input"/>
          <button className="search-btn"></button>
        </div>
      </div>
      

      
    </div>
  );
};

export default Navbar;
