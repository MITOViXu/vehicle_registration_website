import "./App.css"
import { useState, useEffect } from "react"
import { ethers } from "ethers"
import { abi, contractAddress } from "./constant/constant"
import Login from "./components/Login"
import Connected from "./components/Connected"


function App() {
    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState(null)
    const [isConnected, setIsConnected] = useState(false)
    //function 
    async function connectToMetamask() {
        if (window.ethereum) {
            try {
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                )
                setProvider(provider)
                await provider.send("eth_requestAccounts", [])
                const signer = provider.getSigner()
                const address = await signer.getAddress()   
                setAccount(address)
                console.log("Metamask Connected : " + address)
                setIsConnected(true)
            } catch (err) {
                console.error(err)
            }
        } else {
            console.error("Metamask is not detected in the browser")
        }
    }

    //function move page
    async function handleLogOut() {
        setIsConnected(false)
    }

    return (
        <div className="App">
            {isConnected ? (
                <Connected logout={handleLogOut} account={account} />
            ) : (
                <Login connectWallet={connectToMetamask} numberPlate = {numberPlate}  searchInfo={searchInfo} result={result} />
            )}
        </div>
    )
}

export default App
