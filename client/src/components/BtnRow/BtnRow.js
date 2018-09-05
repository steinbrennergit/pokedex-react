import React from "react";
import BlueBtn from "../BlueBtn";
import "./BtnRow.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const BtnRow = () => (
    <div className="flex-row">
        <BlueBtn dex="1"/>
        <BlueBtn dex="2"/>
        <BlueBtn dex="3"/>
        <BlueBtn dex="4"/>
        <BlueBtn dex="5"/>
    </div>
);

export default BtnRow;