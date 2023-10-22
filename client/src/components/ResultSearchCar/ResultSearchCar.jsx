import React from 'react'
import "./ResultSearchCar.css"

const ResultSearchCar = ({vehicleinfor}) => {
  return (
    <div className="ResultCar">
        <div className="information-car">
          <div class="form-group">
            <label for="name">Thông tin chủ xe</label>
            <input
              type="text"
              value={vehicleinfor.vehicleOwner}
              id="1"
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="name">Biển số xe</label>
            <input
              type="text"
              id="2"
              value={vehicleinfor.numberPlate}
              readOnly
            />
          </div>

          <div class="form-group">
            <label for="name">Năm sản xuất</label>
            <input
              type="text"
              id="3"
              value={vehicleinfor.yearManufac}
              readOnly
            />
          </div>

          <div class="form-group">
            <label for="name">Loại phương tiện</label>
            <input type="text" id="7" value={vehicleinfor.typeOf} readOnly />
          </div>

          <div class="form-group">
            <label for="name">Nhãn hiệu xe</label>
            <input type="text" id="8" value={vehicleinfor.mark} readOnly />
          </div>

          <div class="form-group">
            <label for="name">Số loại</label>
            <input type="text" id="9" value={vehicleinfor.modelCode} readOnly />
          </div>

          <div class="form-group">
            <label for="name">Số khung</label>
            <input
              type="text"
              id="10"
              value={vehicleinfor.chassicNum}
              readOnly
            />
          </div>

          <div class="form-group">
            <label for="name">Niêm Hạn sử dụng</label>
            <input
              type="text"
              id="4"
              value={vehicleinfor.lifetimeLimit}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="name">Số phiếu kiểm định</label>
            <input
              type="text"
              id="5"
              value={vehicleinfor.insepectionReportN}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="name">Hiệu lực đến năm</label>
            <input
              type="text"
              id="6"
              value={vehicleinfor.insepectionValidUntil}
              readOnly
            />
          </div>
    </div>
    </div>
  )
}

export default ResultSearchCar