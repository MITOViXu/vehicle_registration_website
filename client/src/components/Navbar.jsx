import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const CustomButton = ({ title, handleClick }) => {
    return <button onClick={handleClick}>{title}</button>
}
const Navbar = () => {
    let navigateTitle = 'login'
    const navigate = useNavigate()
    navigate('login')

    return (
        <div className="navbarDiv">
            <CustomButton
                title={navigateTitle == 'login' ? 'tracuu' : 'login'}
                handleClick={() => {
                    navigateTitle =
                        navigateTitle == 'login' ? 'tracuu' : 'login'
                    
                }}
            />
        </div>
    )
}

export default Navbar
