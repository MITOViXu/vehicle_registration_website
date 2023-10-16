import React from 'react'
import "./FindCar.css"
const FindCar = (props) => {
  return (
    <div className="find-car-home">
      <div className="find-car-pic">
        <h1 style={{fontSize:'50px'}}>Find You Cars Here</h1>
      </div>
      <div className="find-car-infor">
      <form class="form-home" onSubmit={props.handleSubmit}>
        <div class="form-group-home">
          <label for="name">Nhập CCCD chủ xe:</label>
          <input type="text" id="name" name="name" placeholder="CCCD" />
        </div>
        <div class="form-group-home">
          <label for="message">Nhập biển số xe:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Biển số xe"
          />
        </div>
        <button className="login-button-home">Search Information</button>
      </form>
      </div>
    </div>
  )
}

export default FindCar