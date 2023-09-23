import React from "react"
import pic1 from "./pic1.jpg"
import "./Login.css"
import { useState, useEffect } from "react"
import { abi, contractAddress } from "../constant/constant"
import { ethers } from "ethers"


const Login = (props) => {
    const [provider,setProvider] = useState(null)
    const [vehicleinfor, setVehicleinfor] = useState([])
    const [numberPlate, setNumberPlate] = useState("")
    const {contractInstance} = props.car

    async function handleNumberPlateChange(e) {
        setNumberPlate(e.target.value)
    }
        // const handleSubmit = async (e) => {
        //     e.preventDefault()      
        //     const results = await contractInstance.getVehicleInfo(numberPlate)
        //     console.log(contractInstance)
        //     setVehicleinfor(results)
        // }   
        const handleSubmit = async(e) =>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract (
        contractAddress, abi, signer
      );
      const results = await contractInstance.getVehicleInfo(numberPlate)
            console.log(contractInstance)
            setVehicleinfor(results)
        }
    return (    
        <div className="login-container">
            <h1 style={{ marginBottom: "0px" }}>
                <span className="colorful-text">
                    Vehicle Registry Decentralized Application Login
                </span>
            </h1>
            <h2 style={{ margin: "0px", color: "whitesmoke" }}>
                If you are admin please login below
            </h2>
            <button className="login-button" onClick={props.connectWallet}>
                Connect Metamask
            </button>

            <div className="find-car">
                <form class="form" onSubmit={handleSubmit}>
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
                            value={numberPlate}
                            onChange={handleNumberPlateChange}                 
                        />
                    </div>

                    <button
                        className="login-button"
                        // onClick={() => {
                        //     searchInfo(numberPlate)
                        // }}
                    >
                        Search Information
                    </button>
                </form>
            </div>

            <div className="information-car">
                {vehicleinfor == null ? (
                    <div>
                        <h1>You didn't search yet</h1>
                    </div>
                ) : (
                    <div>
                        <div class="form-group">
                            <label for="name">Thông tin chủ xe</label>
                            <input
                                type="text"
                                value={vehicleinfor.vehicleOwner}
                                id="1"
                                readOnly
                            />
                        </div>
                        <div class="form-group">
                            <label for="name">Biển số xe</label>
                            <input
                                type="text"
                                id="2"
                                value={vehicleinfor.numberPlate}
                                readOnly
                            />
                        </div>

                        <div class="form-group">
                            <label for="name">Năm sản xuất</label>
                            <input
                                type="text"
                                id="3"
                                value={vehicleinfor.yearManufac}
                                readOnly
                            />
                        </div>

                        <div class="form-group">
                            <label for="name">Loại phương tiện</label>
                            <input
                                type="text"
                                id="7"
                                value={vehicleinfor.typeOf}
                                readOnly
                            />
                        </div>

                        <div class="form-group">
                            <label for="name">Nhãn hiệu xe</label>
                            <input
                                type="text"
                                id="8"
                                value={vehicleinfor.mark}
                                readOnly
                            />
                        </div>

                        <div class="form-group">
                            <label for="name">Số loại</label>
                            <input
                                type="text"
                                id="9"
                                value={vehicleinfor.modelCode}
                                readOnly
                            />
                        </div>

                        <div class="form-group">
                            <label for="name">Số khung</label>
                            <input
                                type="text"
                                id="10"
                                value={vehicleinfor.chassicNum}
                                readOnly
                            />
                        </div>

                        <div class="form-group">
                            <label for="name">Niêm Hạn sử dụng</label>
                            <input
                                type="text"
                                id="4"
                                value={vehicleinfor.lifetimeLimit}
                                readOnly
                            />
                        </div>
                        <div class="form-group">
                            <label for="name">Số phiếu kiểm định</label>
                            <input
                                type="text"
                                id="5"
                                value={vehicleinfor.insepectionReportN}
                                readOnly
                            />
                            
                        </div>
                        <div class="form-group">
                            <label for="name">Hiệu lực đến năm</label>
                            <input
                                type="text"
                                id="6"
                                value={vehicleinfor.insepectionValidUntil}
                                readOnly
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Login
