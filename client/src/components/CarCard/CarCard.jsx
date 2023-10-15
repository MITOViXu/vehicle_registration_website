import React, { useEffect, useState } from "react";
import "./CarCard.css";
import { ethers } from "ethers";
import { contractAddress, abi } from "../../constant/constant";

const CarCard = () => {
  const [cars, setCars] = useState([]);

  async function fetchCarsFromContract() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-sepolia.g.alchemy.com/v2/MPMfIIQQw3C8j6ZPKtmlX-dBPCSE7rmU"
      );
      const contract = new ethers.Contract(contractAddress, abi, provider);
      const carArray = await contract.getCar();
      setCars(carArray);
    } catch (error) {
      console.error("Error fetching cars from contract:", error);
    }
  }

  return (
    <div className="block-table-container">
      <button
        onClick={fetchCarsFromContract}
        style={{ cursor: "pointer", borderRadius: "10px" }}
      >
        <h1
          style={{
            color: "black",
            backgroundColor: "white",
            display: "inline-block",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Block explore
        </h1>
      </button>
      <table className="block-table">
        <thead>
          <tr>
            <th>Block id</th>
            <th>Biển số xe</th>
            <th>Năm sản xuất</th>
            <th>Niêm hạn sử dụng</th>
            <th>Loại xe:</th>
            {/* Thêm các cột khác tùy theo yêu cầu */}
          </tr>
        </thead>
        <tbody>
          {cars.length > 0 ? (
            cars.map((car, index) => (
              <tr key={index}>
                <td style={{ color: "whitesmoke" }}>{index}</td>
                <td style={{ color: "whitesmoke" }}>{car.numberPlate}</td>
                <td style={{ color: "whitesmoke" }}>{car.yearManufac}</td>
                <td style={{ color: "whitesmoke" }}>{car.lifetimeLimit}</td>
                <td style={{ color: "whitesmoke" }}>{car.typeOf}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={{ color: "whitesmoke" }} colSpan="5">
                No cars available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarCard;
