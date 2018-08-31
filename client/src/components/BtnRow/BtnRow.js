import React from "react";
import BlueBtn from "../BlueBtn";
import "./BtnRow.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const BtnRow = () => (
    <div className="flex-row">
        <BlueBtn img="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"/>
        <BlueBtn img="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"/>
        <BlueBtn img="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"/>
        <BlueBtn img="https://cdn.bulbagarden.net/upload/5/5d/010Caterpie.png"/>
        <BlueBtn img="https://cdn.bulbagarden.net/upload/4/4e/072Tentacool.png"/>
    </div>
);

export default BtnRow;