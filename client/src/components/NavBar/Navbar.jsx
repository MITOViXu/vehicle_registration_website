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

    <div className="main_navbar" style={{position:"fixed", right:"0", left:"0", top:"0", zIndex:"10000"}}>
      {/* <span className="mobile__menu">
        <i class="ri-menu-line" onClick={toggleMenu}></i>
      </span> */}

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
      </div>

      <div>
        <div>
          <input type="text" placeholder="Search" />
          <span>
            <i></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
