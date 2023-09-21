import React from "react"
import "./Login.css"
import car from "./Screenshot 2023-09-21 100905.png"
const Logo = () => {
    return (
        <div>
            <div className="logo">
                <img className="logo-image" src={car} alt="" />
            </div>
            <div>
              <h2>If you are admin please login</h2>
              <button></button>
            </div>
        </div>
    )
}

export default Logo
