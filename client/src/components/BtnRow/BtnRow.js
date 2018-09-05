import React, { Component } from "react";
import BlueBtn from "../BlueBtn";
import "./BtnRow.css";

function fillRow(arr) {
    return (arr.map(el => (
        <BlueBtn key={el._id} data={el} />
    )))
}

class BtnRow extends Component {
    render() {
        return (
            <div className="flex-row">

                {fillRow(this.props.arr)}

            </div>
        )
    }
}

export default BtnRow;