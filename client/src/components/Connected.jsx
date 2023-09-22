import React from "react"
import pic1 from "./pic1.jpg"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { ethers } from "ethers"
const Login = (props) => {
    const navigate = useNavigate()
    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState(null)

    return (
        <div className="login-container">
            <h1 style={{ marginBottom: "0px" }}>
                <span className="colorful-text">
                    Vehicle Registry Decentralized Application Connect
                </span>
            </h1>
            <h3 className="welcome-section">Welcome {props.account}</h3>
            <h2 style={{ margin: "0px", color: "whitesmoke" }}>
                If you want to log out
            </h2>
            <button className="login-button" onClick={props.logout}>
                Logout
            </button>

            <div className="find-car">
                <form class="form">
                    <div class="form-group">
                        <label for="name">Nhập CCCD chủ xe:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="CCCD"
                        />
                    </div>
                    <div class="form-group">
                        <label for="message">Nhập biển số xe:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Biển số xe"
                            value={props.numberPlate}
                        ></textarea>
                    </div>

                    <button className="login-button" onclick={props.searchInfo}>
                        Search Information
                    </button>
                </form>
            </div>

            <div className="information-car">
                <div class="form-group">
                    <label for="name">Thông tin chủ xe</label>
                    <input
                        type="text"
                        id="1"
                        value={props.veicleOwner}
                        readOnly
                    />
                </div>
                <div class="form-group">
                    <label for="name">Biển số xe</label>
                    <input
                        type="text"
                        id="2"
                        value={props.numberPlate}
                        readOnly
                    />
                </div>
                <div class="form-group">
                    <label for="name">Năm sản xuất</label>
                    <input
                        type="text"
                        id="3"
                        value={props.yearManufac}
                        readOnly
                    />
                </div>
                <div class="form-group">
                    <label for="name">Loại phương tiện</label>
                    <input type="text" id="7" value={props.typeOf} readOnly />
                </div>
                <div class="form-group">
                    <label for="name">Nhãn hiệu xe</label>
                    <input type="text" id="8" value={props.Mark} readOnly />
                </div>
                <div class="form-group">
                    <label for="name">Số loại</label>
                    <input
                        type="text"
                        id="9"
                        value={props.modelCode}
                        readOnly
                    />
                </div>
                <div class="form-group">
                    <label for="name">Số khung</label>
                    <input
                        type="text"
                        id="10"
                        value={props.chassicNum}
                        readOnly
                    />
                </div>
                <div class="form-group">
                    <label for="name">Niêm Hạn sử dụng</label>
                    <input
                        type="text"
                        id="4"
                        value={props.lifeLimit}
                        readOnly
                    />
                </div>
                <div class="form-group">
                    <label for="name">Số phiếu kiểm định</label>
                    <input type="text" id="5" value={props.inspectN} readOnly />
                </div>
                <div class="form-group">
                    <label for="name">Hiệu lực đến năm</label>
                    <input
                        type="text"
                        id="6"
                        value={props.inspectValid}
                        readOnly
                    />
                </div>
            </div>
        </div>
    )
}

export default Login
