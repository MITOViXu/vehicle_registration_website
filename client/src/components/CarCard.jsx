import React, { useEffect, useState } from "react";
import "./Login.css";

const NavBarItem = ({ title, value }) => (
  <div className="couple-item">
    <li className="item">{title}</li>
    <li className="item">{value}</li>
  </div>
);

const CarCard = () => {
  const [blocks, setBlocks] = useState([]);
  const [formData, setFormData] = useState({
    blockNumber: "",
    timestamp: "",
    transactions: "",
    miner: "",
    difficulty: "",
  });

  useEffect(() => {
    const storedBlocks = localStorage.getItem("blocks");
    if (storedBlocks) {
      setBlocks(JSON.parse(storedBlocks));
    }
  }, []);

  const handleClearData = () => {
    setBlocks([]);
    localStorage.removeItem("blocks");
  };
  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddRow = (e) => {
    e.preventDefault();
    setBlocks((prevBlocks) => [...prevBlocks, formData]);
    setFormData({
      blockNumber: "",
      timestamp: "",
      transactions: "",
      miner: "",
      difficulty: "",
    });
  };

  return (
    <div className="block-table-container">
      <h1 style={{ color: "black", backgroundColor: "white",display: "in" }}>Blocks</h1>
      <form>
        <label>
          <h4 style={{ color: "black", backgroundColor: "white", display:"inline-block", padding: "4px", borderRadius: "5px", margin:"0" }}>Timestamp:</h4>
          <input
            type="text"
            name="blockNumber"
            value={formData.blockNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <h4 style={{ color: "black", backgroundColor: "white", display:"inline-block", padding: "4px", borderRadius: "5px", margin:"0" }}>Timestamp:</h4>
          <input
            type="text"
            name="timestamp"
            value={formData.timestamp}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
         <h4 style={{ color: "black", backgroundColor: "white", display:"inline-block", padding: "4px", borderRadius: "5px", margin:"0" }}>Timestamp:</h4>
          <input
            type="text"
            name="transactions"
            value={formData.transactions}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
        <h4 style={{ color: "black", backgroundColor: "white", display:"inline-block", padding: "4px", borderRadius: "5px", margin:"0" }}>Timestamp:</h4>
          <input
            type="text"
            name="miner"
            value={formData.miner}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <h4 style={{ color: "black", backgroundColor: "white", display:"inline-block", padding: "4px", borderRadius: "5px", margin:"0" }}>Timestamp:</h4>
          <input
            type="text"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddRow}>
          Add Row
        </button>
        <button type="button" onClick={handleClearData}>
          Clear data
        </button>
      </form>
      <table className="block-table">
        <thead>
          <tr>
            <th>Block Number</th>
            <th>Timestamp</th>
            <th>Transactions</th>
            <th>Miner</th>
            <th>Difficulty</th>
            {/* Thêm các cột khác tùy theo yêu cầu */}
          </tr>
        </thead>
        <tbody>
          {blocks.map((block, index) => (
            <tr key={index}>
              <td>{block.blockNumber}</td>
              <td>{block.timestamp}</td>
              <td>{block.transactions}</td>
              <td>{block.miner}</td>
              <td>{block.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarCard;