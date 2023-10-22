import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { contractAddress, abi } from "../../constant/constant";
import NotConnected from "../NotConnected/NotConnected";
import Connected from "../Connected/Connected";
import Footer from "../../components/Footer/Footer";

const Admin = () => {
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
    <div style={{marginTop:"70px"}}>
      {isConnected ? (
        <Connected logout={handleLogOut} car={car} />
      ) : (
        <NotConnected connectWallet={connectToMetamask} />
      )}
    </div>
  );
};

export default Admin;
