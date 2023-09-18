import React, { useState } from 'react'
import { contractAbi, contractAddress } from '../constant/constant'
import { useNavigate } from 'react-router-dom'
const ethers = require('ethers')
const Login = () => {
    const navigate = useNavigate()
    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState(null)
    const [isConnected, setIsConnected] = useState(false)
    async function connectToMetamask() {
        if (window.ethereum) {
            try {
                const provider1 = new ethers.providers.Web3Provider(
                    window.ethereum
                )
                setProvider(provider1)
                await provider1.send('eth_requestAccounts', [])
                const signer = await provider.getSigner()
                const address = await signer.getAddress()
                setAccount(address)
                console.log('Metamask Connected : ' + address)
                setIsConnected(true)
            } catch (err) {
                console.error(err)
            }
        } else {
            console.error('Metamask is not detected in the browser')
        }
    }
    function getDetail() {
        console.log('Metamask Account : ' + account)
        console.log('Provider : ' + provider)
    }
    async function getVehicleInfo() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const contractInstance = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
        )
        const tx = await contractInstance.getAdmin().call()
        await tx.wait()
        console.log(tx)
    }
    return (
        <div className="login-container">
            <div className="login-container-title">
                <img
                    src="https://giahanxcg.vr.org.vn/vrms-ui/static/img/bg_header.3bc74518.webp"
                    alt=""
                />
                <br />
                <button className="btn_connect" onClick={connectToMetamask}>
                    Connect to MetaMask
                </button>
                <button className="btn_connect" onClick={getDetail}>
                    Get Admin
                </button>
            </div>
        </div>
    )
}

export default Login
