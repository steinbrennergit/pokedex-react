import React, { Component } from "react";
import "./BlueBtn.css";
// import API from "../../utils/API";

class BlueBtn extends Component {

    render () {
        return (
            <button className="blue-btn">
                <img alt="" className="thumb" src={this.props.sprite}></img>
            </button>
        )
    }
}

export default BlueBtn;