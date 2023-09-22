import React, { useEffect, useState } from "react"
import "./CarCard.css"

// const NavBarItem = ({ title, value }) => (
//   <div className="couple-item">
//     <li className="item">{title}</li>
//     <li className="item">{value}</li>
//   </div>
// );

const CarCard = (props) => {
    const [cars, setCar] = useState([])
    const { contract } = props.car
    // useEffect(() => {
    //     if (props.car != []) {
    //         const message = async () => {
    //             const carArray = await contract.getCar()
    //             setCar(carArray)
    //         }
    //         contract && message()
    //     }
    // }, [contract])

    return cars == [] ? (
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
                    {cars.map((car, index) => (
                        <tr key={index}>
                            <td>{car.blockNumber}</td>
                            <td>{car.timestamp}</td>
                            <td>{car.transactions}</td>
                            <td>{car.miner}</td>
                            <td>{car.difficulty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
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
                    <tr>
                        <td>{null}</td>
                        <td>{null}</td>
                        <td>{null}</td>
                        <td>{null}</td>
                        <td>{null}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CarCard
