import React from "react";
import "./BlueBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const BlueBtn = (props) => (
    <button className="blue-btn">
    <img className="thumb" src={props.img}></img>
    </button>
);

export default BlueBtn;