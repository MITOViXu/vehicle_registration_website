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
                <div className="header_content-tracuu">
                    <h3 style={{ color: 'white' }}>
                        Nếu bạn là thành viên của tổ chức hãy Đăng nhập lý đi
                        nào
                    </h3>
                    
                    <CustomButton                        
                        title={togglePage ? 'Đăng nhập' : 'Tra cứu'}
                        handleClick={() => {
                            navigate(togglePage ? 'login' : 'tracuu')
                            setTogglePage(!togglePage)
                        }}
                    />
                    <div>
                        <CustomButton
                            title={'Tra cứu'}
                            handleClick={() => {
                                navigate('ketqua')
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div className="header_content">
                    <h3 style={{ color: 'white' }}>
                        Nếu bạn là khách hàng, hãy tra cứu
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
