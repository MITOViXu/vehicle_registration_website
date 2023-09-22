import React, { useEffect, useState } from "react"
import "./Login.css"

const NavBarItem = ({ title, value }) => (
    <div className="couple-item">
        <li className="item">{title}</li>
        <li className="item">{value}</li>
    </div>
)

const CarCard = ({ state }) => {
    const [car, setMemos] = useState([])
    const { contract } = state
    useEffect(() => {
        const memosMessage = async () => {
            const car = await contract.getMemos()
            setMemos(car)
            //console.log(memos)
        }
        contract && memosMessage()
    }, [contract])
    return (
        <div className="block-table-container">
            <h1>Blocks</h1>
            <table className="block-table">
                <thead>
                    <tr>
                        <th>Block</th>
                        <th>Căn cước</th>
                        <th>Biển số xe</th>
                        <th>Số loại</th>
                        <th>Nhãn hiệu</th>
                        {/* Thêm các cột khác tùy theo yêu cầu */}
                    </tr>
                </thead>
                <tbody>
                    {car.map((block, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{block.veicleOwner}</td>
                            <td>{block.numberPlate}</td>
                            <td>{block.modelCode}</td>
                            <td>{block.Mark}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CarCard
