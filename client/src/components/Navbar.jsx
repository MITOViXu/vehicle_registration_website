import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
const CustomButton = ({ title, handleClick }) => {
    return (
        <button className="btn_change_page" onClick={handleClick}>
            {title}
        </button>
    )
}
const Navbar = () => {
    const [togglePage, setTogglePage] = useState(true)
    const navigate = useNavigate()
    return (
        <div className="navbarDiv">
            {togglePage ? (
                <div className="header_content">
                    <h3 style={{ color: 'white' }}>
                        Nếu bạn là thành viên của tổ chức hãy Đăng nhập để quản
                        lý đi nào
                    </h3>
                    <CustomButton
                        title={togglePage ? 'Đăng nhập' : 'Tra cứu'}
                        handleClick={() => {
                            navigate(togglePage ? 'login' : 'tracuu')
                            setTogglePage(!togglePage)
                        }}
                    />
                </div>
            ) : (
                <div className="header_content">
                    <h3 style={{color: 'white'}}>
                        Nếu bạn là khách hàng, hãy tra cứu đi nào
                    </h3>
                    <CustomButton
                        title={togglePage ? 'Đăng nhập' : 'Tra cứu'}
                        handleClick={() => {
                                navigate(togglePage ? 'login' : 'tracuu')
                            setTogglePage(!togglePage)
                        }}
                    />
                </div>
            )}
        </div>
    )
}

export default Navbar
