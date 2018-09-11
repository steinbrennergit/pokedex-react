import React, { Component } from "react";
import "./BlueBtn.css";
// import API from "../../utils/API";

class BlueBtn extends Component {

    details () {
        console.log(`/p/${this.props.dexnum}`)
    }

    render () {
        return (
            <button className="blue-btn" onClick={this.details.bind(this)}>
                <img alt="" className="thumb" src={this.props.sprite} />
            </button>
        )
    }
}

export default BlueBtn;