import React from 'react';
import {pic2} from './pic2.jpg';
import "./Connected.css";
const Connected = (props) => {
  return (
   <div className="connected-container">
   <h1 style={{ marginBottom: "0px" }}>
        <span className="colorful1-text">
          Your metamask accout is:{props.account}
        </span>
      </h1>
    <div>

    </div>
   </div>
  )
}

export default Connected;