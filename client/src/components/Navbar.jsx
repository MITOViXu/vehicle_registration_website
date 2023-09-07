import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const CustomButton = ({ title, handleClick }) => {
    return <button onClick={handleClick}>{title}</button>
}
const Navbar = () => {
    const [togglePage, setTogglePage] = useState(true)
    const navigate = useNavigate()
    navigate('login')

    return (
        <div className="navbarDiv">
            {togglePage ? (
                <CustomButton
                    title={togglePage ? 'login' : 'tracuu'}
                    handleClick={() => {
                        navigate(togglePage ? 'login' : 'tracuu')
                        setTogglePage(!togglePage)
                    }}
                />
            ) : (
                <CustomButton
                    title={togglePage ? 'login' : 'tracuu'}
                    handleClick={() => {
                        navigate(togglePage ? 'login' : 'tracuu')
                        setTogglePage(!togglePage)
                    }}
                />
            )}
        </div>
    )
}

export default Navbar
