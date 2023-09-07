import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="navbarDiv">
            <button
                onClick={() => {
                    navigate('login')
                }}
            >
                Đến Login
            </button>
        </div>
    )
}

export default Navbar
