import React, { Component } from "react";
import BtnRow from "../../components/BtnRow";
import "./Btns.css"

class Btns extends Component {
    render() {
        return (
            <div className="flex-container">
                <BtnRow />
                <BtnRow />
                <BtnRow />
                <BtnRow />
                <BtnRow />
                <BtnRow />
            </div>
        )
    }
}

export default Btns;