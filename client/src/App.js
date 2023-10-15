import "./App.css";
import React, { Fragment, useState, useEffect } from "react";
import { ethers } from "ethers";
import Navbar from "./components/NavBar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { contractAddress, abi } from "./constant/constant";
import Home from "./pages/Home/Home";
import Connected from "./pages/Connected/Connected";
import About from "./pages/About/About";
function App() {
<<<<<<< HEAD
    const [account, setAccount] = useState(null)
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
                const address = await signer.getAddress()
                const contract = new ethers.Contract(
                    contractAddress,
                    abi,
                    signer
                )
                console.log("Metamask Connected : " + address)
                setCar({ provider, signer, contract })
                setIsConnected(true)
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
                <Login connectWallet={connectToMetamask} car={car} />
            )}
        </div>
    )
}
export default App
=======
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [contractInstance, setcontractInstance] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [car, setCar] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum); //read the Blockchain
        const signer = provider.getSigner(); //write the blockchain
        const address = await signer.getAddress();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Metamask Connected : " + address);
        setCar({ provider, signer, contract });
        setIsConnected(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Metamask is not detected in the browser");
    }
  }
  async function handleLogOut() {
    setIsConnected(false);
  }
  return (
    <Fragment>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/connected" element={<Connected />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
// import React from 'react'
// import CarCard from './components/CarCard'

// const App = () => {
//   return (
//     <CarCard />
//   )
// }

// export default App
>>>>>>> 805f5574ffb7a4d850960a8bbe68b1037fc5f948
