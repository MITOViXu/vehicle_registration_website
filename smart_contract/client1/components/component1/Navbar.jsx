import React from 'react'
import "./page1.css"
const NavBarItem = ({ title }) => (
  <li className='navbarItems'>{title}</li>
);
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className="ulNavbarStyle">
      {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem title={item} />
        ))}
      </ul>
    </div>
  )
}

export default Navbar