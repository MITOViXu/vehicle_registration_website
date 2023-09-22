import React, { useEffect, useState } from "react"
import "./Login.css"

// const NavBarItem = ({ title, value }) => (
//   <div className="couple-item">
//     <li className="item">{title}</li>
//     <li className="item">{value}</li>
//   </div>
// );

const CarCard = (props) => {
    const [blocks, setBlocks] = useState([])
    const [formData, setFormData] = useState({
        blockNumber: "",
        timestamp: "",
        transactions: "",
        miner: "",
        difficulty: "",
    })

    // useEffect(() => {
    //     const memosMessage = async () => {
    //         const memos = await contract.getMemos()
    //         setMemos(memos)
    //         //console.log(memos)
    //     }
    //     contract && memosMessage()
    // }, [contract])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleAddRow = (e) => {
        e.preventDefault()
        setBlocks((prevBlocks) => [...prevBlocks, formData])
        setFormData({
            blockNumber: "",
            timestamp: "",
            transactions: "",
            miner: "",
            difficulty: "",
        })
    }

    return (
        <div className="block-table-container">
            <h1
                style={{
                    color: "black",
                    backgroundColor: "white",
                    display: "in",
                }}
            >
                Block explore
            </h1>
            
            <table className="block-table">
                <thead>
                    <tr>
                        <th>Block id:</th>
                        <th>Biển số xe:</th>
                        <th>Năm sản xuất:</th>
                        <th>Niêm hạn sử dụng:</th>
                        <th>Loại xe:</th>
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
    )
}

export default CarCard
