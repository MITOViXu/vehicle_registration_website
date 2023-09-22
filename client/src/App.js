import "./App.css"
import { useState, useEffect } from "react"
import { ethers } from "ethers"
import Login from "./components/Login"
import Connected from "./components/Connected"
import { contractAddress, abi } from "./constant/constant"
function App() {
    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState(null)
    const [contractInstance, setcontractInstance] = useState(null)
    const [isConnected, setIsConnected] = useState(false)
    const [car, setCar] = useState({
        provider: null,
        signer: null,
        contract: null,
    })
    async function connectToMetamask() {
        if (window.ethereum) {
            try {
                const { ethereum } = window
                const account = await ethereum.request({
                    method: "eth_requestAccounts",
                })

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload()
                })
                setAccount(account)
                const provider = new ethers.providers.Web3Provider(ethereum) //read the Blockchain
                const signer = provider.getSigner() //write the blockchain

                const contract = new ethers.Contract(
                    contractAddress,
                    abi,
                    signer
                )
                console.log(contract)
                setCar({ provider, signer, contract })
            } catch (err) {
                console.error(err)
            }
        } else {
            console.error("Metamask is not detected in the browser")
        }
    }
    async function handleLogOut() {
        setIsConnected(false)
    }
    return (
        <div className="App">
            {isConnected ? (
                <Connected logout={handleLogOut} account={account} car={car} />
            ) : (
                <Login connectWallet={connectToMetamask} />
            )}
        </div>
    )
}

export default App
// import React from 'react'
// import CarCard from './components/CarCard'

// const App = () => {
//   return (
//     <CarCard />
//   )
// }

// export default App
