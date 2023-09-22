// struct Vehicle{
//     string  vehicleOwner; // chủ xe (mã số CCCD)
//     string  numberPlate; // biển số xe
//     uint8  yearManufac; //năm sản xuất
//     uint8  lifetimeLimit; //niêm hạn sử dụng
//     string  insepectionReportN ; // số phiếu kiểm định
//     string  insepectionValidUntil; //hiệu lực đến nam
//     string typeOf; //loại phương tiện
//     string mark; //nhãn hiệu xe
//     uint256 modelCode; // số loại
//     uint256 chassicNum; //số khung
// }
import React from "react"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { abi, contractAddress } from "../constant/constant"
import { ethers } from "ethers"
import CarCard from "./CarCard"
const Connected = (props) => {
    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState(null)

    const adminInsert = async (e) => {
        e.preventDefault()
        const { contract } = props.car
        const VehicleOwner = document.querySelector("#VehicleOwner").value
        const numberPlate = document.querySelector("#numberPlate").value
        const yearManufac = ethers.utils.parseUnits(
            document.querySelector("#yearManufac").value,
            0
        )
        const typeOf = document.querySelector("#typeOf").value
        const mark = document.querySelector("#mark").value
        const modelCode = ethers.utils.parseUnits(
            document.querySelector("#modelCode").value,
            0
        )
        const classicNum = ethers.utils.parseUnits(
            document.querySelector("#chassicNum").value,
            0
        )
        const lifetimeLimit = ethers.utils.parseUnits(
            document.querySelector("#lifetimeLimit").value,
            0
        )
        const insepectionReportN = document.querySelector(
            "#insepectionReportN"
        ).value
        const insepectionValidUntil = document.querySelector(
            "#insepectionValidUntil"
        ).value

        const transaction = await contract.storeVehicle(
            VehicleOwner,
            numberPlate,
            yearManufac,
            lifetimeLimit,
            insepectionReportN,
            insepectionValidUntil,
            typeOf,
            mark,
            modelCode,
            classicNum
        )
        await transaction.wait()
        alert("Transaction is successul")
        console.log("Transaction is successul")
        window.location.reload()
    }
    return (
        <div className="login-container-connect">
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
            <div className="information-car-connected">
                <form class="form-connected" onSubmit={adminInsert}>
                    <div class="form-group">
                        <label for="name">Nhập CCCD chủ xe:</label>
                        <input
                            style={{ fontSize: "25px" }}
                            type="text"
                            required="required"
                            id="VehicleOwner"
                        />
                    </div>
                    <div class="form-group">
                        <label for="message">Nhập biển số xe:</label>
                        <textarea
                            style={{ fontSize: "25px" }}
                            required="required"
                            id="numberPlate"
                        ></textarea>
                    </div>
                    <div class="form-group">
                        <label for="name">Năm sản xuất</label>
                        <input
                            style={{ fontSize: "25px" }}
                            type="text"
                            required="required"
                            id="yearManufac"
                        />
                    </div>
                    <div class="form-group">
                        <label for="name">Loại phương tiện</label>
                        <input
                            style={{ fontSize: "25px" }}
                            type="text"
                            required="required"
                            id="typeOf"
                        />
                    </div>
                    <div class="form-group">
                        <label for="name">Nhãn hiệu xe</label>
                        <input
                            style={{ fontSize: "25px" }}
                            type="text"
                            required="required"
                            id="mark"
                        />
                    </div>
                    <div class="form-group">
                        <label for="name">Số loại</label>
                        <input
                            style={{ fontSize: "25px" }}
                            type="text"
                            required="required"
                            id="modelCode"
                        />
                    </div>
                    <div class="form-group">
                        <label for="name">Số khung</label>
                        <input
                            style={{ fontSize: "25px" }}
                            type="text"
                            required="required"
                            id="chassicNum"
                        />
                    </div>
                    <div class="form-group">
                        <label for="name">Niêm Hạn sử dụng</label>
                        <input
                            style={{ fontSize: "25px" }}
                            type="text"
                            required="required"
                            id="lifetimeLimit"
                        />
                    </div>
                    <div class="form-group">
                        <label for="name">Số phiếu kiểm định</label>
                        <input
                            style={{ fontSize: "25px" }}
                            type="text"
                            required="required"
                            id="insepectionReportN"
                        />
                    </div>
                    <div class="form-group">
                        <label for="name">Hiệu lực đến năm</label>
                        <input
                            style={{ fontSize: "25px" }}
                            type="text"
                            required="required"
                            id="insepectionValidUntil"
                        />
                    </div>
                    <button className="login-button">Add info</button>
                </form>
            </div>
            {/**/}
            <CarCard />
        </div>
    )
}

export default Connected
