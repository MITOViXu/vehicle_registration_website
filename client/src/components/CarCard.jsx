import React from "react"
import "./Login.css"
const NavBarItem = ({ title, value }) => (
    <div className="couple-item">
        <li className="item">{title}</li>
        <li className="item">{value}</li>
    </div>
)

const CarCard = () => {
    return (
        <div>
            {/* <ul className="carListItem">
                {[
                    "Thông tin chủ xe cccd :  ",
                    "Biển số xe :  ",
                    "Năm sản xuất :  ",
                    "Loại phương tiện :  ",
                    "Nhãn hiệu xe :  ",
                    "Số loại :  ",
                    "Số khung :  ",
                    "Niêm hạn sử dụng :  ",
                    "Số phiếu kiểm định :  ",
                    "Hiệu lực đến năm :  ",
                ].map((item, index) => (
                    <NavBarItem
                        key={item + index}
                        title={item}
                        value={"Hello"}
                    />
                ))}
            </ul> */}
            <div className="block-table-container">
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
                        <tr key={1}>
                            <td>{"block.blockNumber"}</td>
                            <td>{"block.blockNumber"}</td>
                            <td>{"block.blockNumber"}</td>
                            <td>{"block.blockNumber"}</td>
                            <td>{"block.blockNumber"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CarCard
