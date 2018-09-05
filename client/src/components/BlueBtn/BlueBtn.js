import React from "react";
import "./BlueBtn.css";
import API from "../../utils/API";

const BlueBtn = (props) => (
    <button className="blue-btn">
    <img className="thumb" src={props.img}></img>
    </button>
);

export default BlueBtn;