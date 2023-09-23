import React, { useEffect, useState } from "react";
import "./CarCard.css";

const CarCard = (props) => {
  const [cars, setCars] = useState([]);
  const { contract } = props.car;

  useEffect(() => {
    const fetchCars = async () => {
      if (contract) {
        try {
          const carArray = await contract.getCar();
          setCars(carArray);
        } catch (error) {
          console.error("Error fetching cars:", error);
        }
      }
    };

    fetchCars();
  }, [props.car]);

  return (
    <div className="block-table-container">
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
                <td style={{color:"whitesmoke"}} >{car.blockNumber}</td>
                <td style={{color:"whitesmoke"}}>{car.timestamp}</td>
                <td style={{color:"whitesmoke"}}>{car.transactions}</td>
                <td style={{color:"whitesmoke"}}>{car.miner}</td>
                <td style={{color:"whitesmoke"}}>{car.difficulty}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td  style={{color:"whitesmoke"}} colSpan="5">No cars available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarCard;