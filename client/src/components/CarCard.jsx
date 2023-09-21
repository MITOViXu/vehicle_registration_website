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
        <div className="card-car">
            <ul className="carListItem">
                {[
                    "Căn cước :  ",
                    "Biển số :  ",
                    "Thông tin chủ xe :  ",
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
            </ul>
        </div>
    )
}

export default CarCard
